const express = require('express');
const multer = require('multer');
const fs = require('fs');
const pdfParse = require('pdf-parse');

const Report = require('../models/Report');
const analyzeMedicalReport = require('../utils/groq');

const router = express.Router();

/* =========================
   MULTER STORAGE
========================= */

const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    cb(null, 'uploads/');

  },

  filename: (req, file, cb) => {

    cb(
      null,
      Date.now() + '-' + file.originalname
    );

  }

});

const upload = multer({ storage });

/* =========================
   UPLOAD REPORT
========================= */

router.post(
  '/upload',
  upload.single('report'),
  async (req, res) => {

    try {

      let extractedText = '';
      let analysis = 'Analysis pending';

      if (
        req.file &&
        req.file.mimetype === 'application/pdf'
      ) {

        const pdfBuffer =
          fs.readFileSync(
            req.file.path
          );

        const pdfData =
          await pdfParse(
            pdfBuffer
          );

        extractedText =
          pdfData.text;

        if (
          extractedText &&
          extractedText.trim().length > 20
        ) {

          try {

            analysis =
              await analyzeMedicalReport(
                extractedText
              );

          } catch (aiError) {

            console.error(
              'Groq Error:',
              aiError.message
            );

            analysis =
              'AI analysis unavailable';

          }

        }

      }

      const report =
        await Report.create({

          userEmail:
            req.body.userEmail,

          fileName:
            req.file.originalname,

          filePath:
            req.file.path,

          extractedText,

          analysis

        });

      res.status(201).json({

        success: true,

        report

      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message: error.message

      });

    }

  }
);

/* =========================
   HISTORY
========================= */

router.get(
  '/history',
  async (req, res) => {

    try {

      const reports =
        await Report.find({

          userEmail:
            req.query.email

        }).sort({

          createdAt: -1

        });

      res.json(reports);

    } catch (error) {

      res.status(500).json({

        message:
          error.message

      });

    }

  }
);

/* =========================
   LATEST ANALYSIS
========================= */

router.get(
  '/latest-analysis',
  async (req, res) => {

    try {

      const report =
        await Report.findOne({

          userEmail:
            req.query.email

        }).sort({

          createdAt: -1

        });

      if (!report) {

        return res.status(404).json({

          message:
            'No reports found'

        });

      }

      res.json(report);

    } catch (error) {

      res.status(500).json({

        message:
          error.message

      });

    }

  }
);

/* =========================
   DASHBOARD STATS
========================= */

router.get(
  '/stats',
  async (req, res) => {

    try {

      const email =
        req.query.email;

      const totalReports =
        await Report.countDocuments({

          userEmail:
            email

        });

      const analyzedReports =
        await Report.countDocuments({

          userEmail:
            email,

          analysis: {

            $ne:
              'Analysis pending'

          }

        });

      const pendingReports =
        await Report.countDocuments({

          userEmail:
            email,

          analysis:
            'Analysis pending'

        });

      res.json({

        totalReports,

        analyzedReports,

        pendingReports

      });

    } catch (error) {

      res.status(500).json({

        message:
          error.message

      });

    }

  }
);

/* =========================
   SINGLE REPORT
========================= */

router.get(
  '/:id',
  async (req, res) => {

    try {

      const report =
        await Report.findOne({

          _id:
            req.params.id,

          userEmail:
            req.query.email

        });

      if (!report) {

        return res.status(404).json({

          message:
            'Report not found'

        });

      }

      res.json(report);

    } catch (error) {

      res.status(500).json({

        message:
          error.message

      });

    }

  }
);
/* =========================
   DOWNLOAD REPORT
========================= */

router.get(
  '/download/:id',
  async (req, res) => {

    try {

      const report = await Report.findById(
        req.params.id
      )

      if (!report) {

        return res.status(404).json({
          message: 'Report not found'
        })

      }

      res.download(
        report.filePath,
        report.fileName,
        (err) => {

          if (err) {

            console.error(err)

            res.status(500).json({
              message: 'File download failed'
            })

          }

        }
      )

    } catch (error) {

      console.error(error)

      res.status(500).json({
        message: error.message
      })

    }

  }
)

module.exports = router;