const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  name: String,
  artist: String,
  genre: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song; // Model created
