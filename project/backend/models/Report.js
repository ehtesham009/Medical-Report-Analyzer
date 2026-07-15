const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },

  userEmail: {
    type: String,
    required: true
  },

  fileName: {
    type: String,
    required: true
  },

  filePath: {
    type: String,
    required: true
  },

  extractedText: {
    type: String,
    default: ''
  },

  analysis: {
    type: String,
    default: 'Analysis pending'
  }

}, {
  timestamps: true
});

module.exports = mongoose.model(
  'Report',
  reportSchema
);