const {Schema, model} = require('mongoose');

const galleryDataSchema = new Schema({
 image: String,
 title: String,
 subTitle: String
     
})

const GalleryData = model('GalleryData',  galleryDataSchema );

module.exports = GalleryData;
