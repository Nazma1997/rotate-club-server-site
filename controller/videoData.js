const VideoData = require('../models/videoData');
const videoService = require('../service/video');

// Get All video data
const getAllVideo = async(req,res, next) => {
  try{
    const oneVideo = await videoService.findAllVideo();
    return res.status(200).json(oneVideo);
  }
  catch(e){
    next(e)
  }
};

// Get video by id

const getVideoById = async(req,res, next) => {
  const videoId = req.params.videoId;
  try{
    const oneVideo = await videoService.findVideoByProperty('_id', videoId);
    if(!oneVideo){
      throw error('video not found', 404);
    }
    return res.status(200).json(oneVideo)
  }
  catch(e){
    next(e)
  }
}

//post
const postVideo = async(req,res, next) => {
  const {title} = req.body;

  try{
    const oneVideo = await videoService.createVideo({title})
    return res.status(201).json(oneVideo)
  }
  catch(e){
    next(e)
  }
}




// Update video  (some fields)

const patchVideoId = async(req, res, next) => {
  const videoId = req.params.videoId;
  const {title} = req.body;

  try{
      const oneVideo = await videoService.findVideoByProperty('_id',videoId);

      if(!oneVideo){
        throw error('video not found', 400);
      }

     
      
      oneVideo.title = title ?? oneVideo.title;
      


      await oneVideo.save();

      return res. status(200).json(oneVideo);
  }
  catch(e){
    next(e)
  }
}

// Delete a video

const deleteVideoById = async(req, res, next) => {
  const videoId = req.params.videoId;
  try{
    const oneVideo = await videoService.findVideoByProperty('_id', videoId);
    if(!oneVideo) {
      throw error('video not found', 400)
    }

    await oneVideo.remove();

    return res.status(203).json({message: 'video Deleted Successfully', oneVideo}).send()
  }
  catch(e){
    next(e)
  }
}

module.exports ={
  getAllVideo,
  getVideoById,
  patchVideoId,
  postVideo,
  deleteVideoById

}