const VideoData = require('../models/videoData');


// It's not a method. It's a function for patch and delete method
const findVideoByProperty = (key, value) => {
  if(key == '_id'){
    return VideoData.findById(value);
  }

  return VideoData.findOne({[key] : value});
}




// Get All video

const findAllVideo = () => {
  return VideoData.find();
}

//post

const createVideo = ({title}) => {
 
  const oneVideo = new VideoData({title});
  return oneVideo.save();
}


// Update a Video

const updateVideo = async(id, data) => {
  const oneVideo = await findVideoByProperty('_id', data._id)
  if(oneVideo ){
    throw error('Video already in use', 400)
  }

  return VideoData.findByIdAndUpdate(id, {...data}, 
    {new: true})
}

module.exports = {
  findVideoByProperty,
  createVideo,
  findAllVideo,
  updateVideo

}