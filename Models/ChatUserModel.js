const mongoose = require("mongoose");

const ChatUser = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  lastTimeSee: [
    {
      roomID: mongoose.Schema.Types.ObjectId,
      time: mongoose.Schema.Types.Date,
    },
  ],
});

module.exports = mongoose.model("ChatUser", ChatUser);
