const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: ['admin', 'doctor', 'patient'],
      default: 'patient'
    },

    profileImage: {
      type: String,
      default: ''
    },

    phone: {
      type: String,
      default: ''
    },

    hospital: {
      type: String,
      default: ''
    },

    address: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  'User',
  userSchema
);