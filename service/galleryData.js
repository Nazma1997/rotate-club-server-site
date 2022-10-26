const GalleryData = require('../models/galleryData');


// It's not a method. It's a function for patch and delete method
const findGalleryByProperty = (key, value) => {
  if(key == '_id'){
    return GalleryData.findById(value);
  }

  return GalleryData.findOne({[key] : value});
}




// Get All gallery

const findAllGallery = () => {
  return GalleryData.find();
}

//post

const createGallery = ({image, title, subTitle}) => {
 
  
  const gallery = new GalleryData({image, title, subTitle});
  return gallery.save();
}


// Update a Gallery

const updateGallery = async(id, data) => {
  const gallery = await findGalleryByProperty('_id', data._id)
  if(gallery){
    throw error('Gallery already in use', 400)
  }

  return GalleryData.findByIdAndUpdate(id, {...data}, 
    {new: true})
}

module.exports = {
  findGalleryByProperty,
  createGallery,
  findAllGallery,
  updateGallery

}