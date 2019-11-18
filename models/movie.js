var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 var movieSchema = new Schema({
     title: String,
     releaseYear: Number,
     rating: String,
     cast : [String],
     nowPlaying: Boolean
 })

 module.exports = mongoose.model('Movie', movieSchema);
