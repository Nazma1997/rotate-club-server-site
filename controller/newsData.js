const NewsData = require('../models/newsData');
const newsService = require('../service/newsData');

// Get All News
const getAllNews = async(req,res, next) => {
  try{
    const news = await newsService.findAllNews();
    return res.status(200).json(news);
  }
  catch(e){
    next(e)
  }
};

// Get News by Id

const getNewsById = async(req,res, next) => {
  const newsId = req.params.newsId;
  try{
    const news = await newsService.findNewsByProperty('_id', causeId);
    if(!news){
      throw error('news not found', 404);
    }
    return res.status(200).json(news)
  }
  catch(e){
    next(e)
  }
}

// Post new News
const postNews = async(req,res, next) => {
  const {image,href,title,date} = req.body;

  try{
    const news = await newsService.createNews({image,href, title, date})
    return res.status(201).json(news)
  }
  catch(e){
    next(e)
  }
}

// Delete a News

const deleteNewsById = async(req, res, next) => {
  const newsId = req.params.newsId;
  try{
    const news = await newsService.findNewsByProperty('_id', newsId);
    if(!news) {
      throw error('News not found', 404)
    }

    await news.remove();

    return res.status(203).json({message: 'News Deleted Successfully', news}).send()
  }
  catch(e){
    next(e)
  }
}

// Update News (some fields)

const patchNewsById = async(req, res, next) => {
  const newsId = req.params.newsId;
  const {image,href, title, date} = req.body;

  try{
      const news = await newsService.findNewsByProperty('_id',newsId);

      if(!news){
        throw error('News not found', 400);
      }

      news.href = href ?? cause.href;
      news.title = title ?? news.title;
      news.image = image ?? news.image;
      news.date = date ?? news.date;
    
      await news.save();

      return res. status(200).json(news);
  }
  catch(e){
    next(e)
  }
}

module.exports ={
  getAllNews,
  getNewsById,
  postNews,
  deleteNewsById,
  patchNewsById

}