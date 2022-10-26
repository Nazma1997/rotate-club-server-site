const GalleryData = require('../models/galleryData');
const galleryService = require('../service/galleryData');

// Get All Gallery
const getAllGallery = async(req,res, next) => {
  try{
    const gallery = await galleryService.findAllGallery();
    return res.status(200).json(gallery);
  }
  catch(e){
    next(e)
  }
};

// Get gallery by Id

const getGalleryById = async(req,res, next) => {
  const galleryId = req.params.galleyId;
  try{
    const gallery = await galleryService.findGalleryByProperty('_id', galleryId);
    if(!gallery){
      throw error('Gallery not found', 404);
    }
    return res.status(200).json(gallery)
  }
  catch(e){
    next(e)
  }
}

//post
const postGallery = async(req,res, next) => {
  const {subTitle, title, image} = req.body;

  try{
    const gallery = await galleryService.createGallery({subTitle, title, image})
    return res.status(201).json(gallery)
  }
  catch(e){
    next(e)
  }
}




// Update gallery (some fields)

const patchGalleryById = async(req, res, next) => {
  const galleryId = req.params.galleryId;
  const {subTitle, title, image} = req.body;

  try{
      const gallery = await galleryService.findGalleryByProperty('_id',galleryId);

      if(!gallery){
        throw error('Gallery not found', 400);
      }

     
      gallery.title = title ?? gallery.title;
      gallery.subTitle = subTitle ?? gallery.subTitle;
      gallery.image = image ?? gallery.image;
     

      await gallery.save();

      return res. status(200).json(gallery);
  }
  catch(e){
    next(e)
  }
}

// Delete a gallery

const deleteGalleryById = async(req, res, next) => {
  const galleryId = req.params.galleryId;
  try{
    const gallery = await galleryService.findGalleryByProperty('_id', galleryId);
    if(!gallery) {
      throw error('gallery not found', 404)
    }

    await gallery.remove();

    return res.status(203).json({message: 'Gallery Deleted Successfully', gallery}).send()
  }
  catch(e){
    next(e)
  }
}

module.exports ={
  getAllGallery,
  getGalleryById,
  patchGalleryById,
  postGallery,
  deleteGalleryById

}