const NewsData = require('../models/newsData');


// It's not a method. It's a function for patch and delete method
const findNewsByProperty = (key, value) => {
  if(key == '_id'){
    return NewsData.findById(value);
  }

  return NewsData.findOne({[key] : value});
}

// Create new news

const createNews = ({image,href,data,title}) => {
 
  const news = new NewsData({image,href,data,title});
  return news.save();
}


// Get All news 

const findAllNews = () => {
  return NewsData.find();
}


// Update a news 

const updateNews = async(id, data) => {
  const news = await findNewsByProperty('_id', data._id)
  if(news){
    throw error('News already in use', 400)
  }

  return NewsData.findByIdAndUpdate(id, {...data}, 
    {new: true})
}

module.exports = {
  findNewsByProperty,
  createNews,
  findAllNews,
  updateNews

}