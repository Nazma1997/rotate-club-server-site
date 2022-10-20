const {Schema, model} = require('mongoose');

const newsDataSchema = new Schema({
  img: String,
  href: String,
  data: String,
  comments: Number,
  title: String
     
})

const NewsData = model('NewsData', newsDataSchema);

module.exports = NewsData;
