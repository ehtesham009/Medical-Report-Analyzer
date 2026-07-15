const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const User = require('../models/User');

const router = express.Router();

/* ======================
   MULTER
====================== */

const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    cb(
      null,
      'uploads/profile'
    );

  },

  filename: (req, file, cb) => {

    cb(
      null,
      Date.now() +
      '-' +
      file.originalname
    );

  }

});

const upload = multer({
  storage
});

/* ======================
   REGISTER
====================== */

router.post(
  '/register',
  async (req, res) => {

    try {

      const {
        name,
        email,
        password,
        role
      } = req.body;

      const existingUser =
        await User.findOne({
          email
        });

      if (existingUser) {

        return res.status(400).json({
          message:
            'User already exists'
        });

      }

      const hashedPassword =
        await bcrypt.hash(
          password,
          10
        );

      const user =
        await User.create({

          name,

          email,

          password:
            hashedPassword,

          role:
            role ||
            'patient'

        });

      res.status(201).json({

        message:
          'Registration successful'

      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message
      });

    }

  }
);

/* ======================
   LOGIN
====================== */

router.post(
  '/login',
  async (req, res) => {

    try {

      const {
        email,
        password
      } = req.body;

      const user =
        await User.findOne({
          email
        });

      if (!user) {

        return res.status(400).json({
          message:
            'Invalid email'
        });

      }

      const match =
        await bcrypt.compare(
          password,
          user.password
        );

      if (!match) {

        return res.status(400).json({
          message:
            'Invalid password'
        });

      }

      const token =
        jwt.sign(

          {
            id: user._id,
            email: user.email,
            role: user.role
          },

          process.env.JWT_SECRET,

          {
            expiresIn: '7d'
          }

        );

      res.json({

        message:
          'Login successful',

        token,

        user: {

          id:
            user._id,

          name:
            user.name,

          email:
            user.email,

          role:
            user.role,

          phone:
            user.phone,

          hospital:
            user.hospital,

          address:
            user.address,

          profileImage:
            user.profileImage

        }

      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message
      });

    }

  }
);

/* ======================
   UPDATE PROFILE
====================== */

router.put(
  '/profile/:id',
  async (req, res) => {

    try {

      const user =
        await User.findByIdAndUpdate(

          req.params.id,

          req.body,

          {
            new: true
          }

        );

      res.json(user);

    } catch (error) {

      res.status(500).json({
        message:
          error.message
      });

    }

  }
);

/* ======================
   UPLOAD PROFILE IMAGE
====================== */

router.post(
  '/upload-profile/:id',

  upload.single(
    'profileImage'
  ),

  async (req, res) => {

    try {

      const imagePath =
        `http://localhost:5000/uploads/profile/${req.file.filename}`;

      const user =
        await User.findByIdAndUpdate(

          req.params.id,

          {
            profileImage:
              imagePath
          },

          {
            new: true
          }

        );

      res.json({

        message:
          'Profile image uploaded',

        image:
          imagePath,

        user

      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message
      });

    }

  }
);

module.exports = router;