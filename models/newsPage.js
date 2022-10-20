const {Schema, model} = require('mongoose');

const newsPageDataSchema = new Schema({
  image: String,
  date: String,
  title: String,
  short: String,
  description: String,
  author: String,
  // comments: String
     
})

const  NewsPageData = model('NewsPageData', newsPageDataSchema);

module.exports = NewsPageData;
