const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
  name: String,
  artist: String,
  genre: String,
});

const PlaylistModel = mongoose.model("Playlists", playlistSchema);

module.exports = PlaylistModel; // Model created
