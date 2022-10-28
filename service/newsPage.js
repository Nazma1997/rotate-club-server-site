const NewsPage = require('../models/newsPage');


// It's not a method. It's a function for patch and delete method
const findNewsByProperty = (key, value) => {
  if(key == '_id'){
    return NewsPage.findById(value);
  }

  return NewsPage.findOne({[key] : value});
}

// Create new news page

const createNewsPage = ({image,date,title,short,description,author}) => {
 
  const news = new NewsPage({image,date, title, short, description,author});
  return news.save();
}


// Get All News

const findAllNews = () => {
  return NewsPage.find();
}


// Update a News page 

const updateNewsPage = async(id, data) => {
  const news  = await findNewsByProperty('_id', data._id)
  if(news){
    throw error('News already in use', 400)
  }

  return NewsPage.findByIdAndUpdate(id, {...data}, 
    {new: true})
}

module.exports = {
  findNewsByProperty,
  createNewsPage,
  findAllNews,
  updateNewsPage

}