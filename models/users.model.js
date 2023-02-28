const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  organization: {
    type: mongoose.Schema.ObjectId,
    ref: 'organization'
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
  },
});

const USERS = mongoose.model("users", usersSchema);
module.exports = USERS;
