const NewsPage = require('../models/newsPage');
const newsPageService = require('../service/newsPage');

// Get All News
const getAllNews = async(req,res, next) => {
  try{
    const news = await newsPageService.findAllNews();
    return res.status(200).json(news);
  }
  catch(e){
    next(e)
  }
};

// Get News page by Id

const getNewsPageById = async(req,res, next) => {
  const newsId = req.params.newsId;
  try{
    const news = await newsService.findNewsByProperty('_id', newsId);
    if(!news){
      throw error('News not found', 404);
    }
    return res.status(200).json(news)
  }
  catch(e){
    next(e)
  }
}

// Post new News page
const postNews = async(req,res, next) => {
  const {image,date, title, short, description,author} = req.body;

  try{
    const news = await newsPageService.createNewsPage({image,date, title, short, description,author})
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
    const news = await newsPageService.findNewsByProperty('_id', newsId);
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
  const {image,date, title, short, description,author} = req.body;

  try{
      const news = await newsPageService.findNewsByProperty('_id',newsId);

      if(!news){
        throw error('News not found', 400);
      }

      news.image = image ?? news.image;
      news.date = date ?? news.date;
      news.title = title ?? news.title;
      news.short = short ?? news.short;
      news.description = description ?? news.description;
      news.author = author ?? news.author;

      await news.save();

      return res. status(200).json(news);
  }
  catch(e){
    next(e)
  }
}

module.exports ={
  getAllNews,
  getNewsPageById,
  postNews,
  deleteNewsById,
  patchNewsById

}