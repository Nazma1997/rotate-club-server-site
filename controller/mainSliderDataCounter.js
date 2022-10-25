const Slider = require('../models/mainSliderDataCounter');
const sliderService = require('../service/mainSliderDataCounter');

// Get All Slider 
const getAllSlider = async(req,res, next) => {
  try{
    const slider = await sliderService.findAllSliders();
    return res.status(200).json(slider);
  }
  catch(e){
    next(e)
  }
};

// Get Slider by Id

const getSliderById = async(req,res, next) => {
  const sliderId = req.params._id;
  try{
    const slider = await sliderService.findSliderByProperty('_id', sliderId);
    if(!slider){
      throw error('Slider not found', 404);
    }
    return res.status(200).json(slider)
  }
  catch(e){
    next(e)
  }
}

// Post new Slider
const postSlider = async(req,res, next) => {
  const {percent, title, image} = req.body;

  try{
    const slider = await sliderService.createSlider({count, title, image})
    return res.status(201).json(slider)
  }
  catch(e){
    next(e)
  }
}

// Delete a slider 

const deleteSliderById = async(req, res, next) => {
  const sliderId = req.params.sliderId;
  try{
    const slider = await sliderService.findSliderByProperty('_id', sliderId);
    if(!slider) {
      throw error('Slider not found', 404)
    }

    await slider.remove();

    return res.status(203).json({message: 'Slider Deleted Successfully', slider}).send()
  }
  catch(e){
    next(e)
  }
}

// Update Slider (some fields)

const patchSliderById = async(req, res, next) => {
  const sliderId = req.params.sliderId;
  const {count, title, image} = req.body;

  try{
      const slider = await sliderService.findSliderByProperty('_id',sliderId);

      if(!slider){
        throw error('Slider not found', 400);
      }

      slider.count = count ?? slider.count;
      slider.title = title ?? slider.title;
      slider.image = image ?? slider.image;

      await slider.save();

      return res. status(200).json(slider);
  }
  catch(e){
    next(e)
  }
}

module.exports ={
  getAllSlider,
  getSliderById,
  postSlider,
  deleteSliderById,
  patchSliderById

}