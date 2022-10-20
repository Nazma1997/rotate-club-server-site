const {Schema, model} = require('mongoose');

const videoDataSchema = new Schema({
 
 title: String,
     
})

const VideoData = model('VideoData',  videoDataSchema );

module.exports = VideoData;
