const MainSlider = require('../models/mainSliderDataCounter');


// It's not a method. It's a function for patch and delete method
const findSliderByProperty = (key, value) => {
  if(key == '_id'){
    return MainSlider.findById(value);
  }

  return MainSlider.findOne({[key] : value});
}

// Create new post 

const createSlider = ({count, title, image}) => {

  const slider = new MainSlider({count, title, image});
  return slider.save();
}


// Get All sliders 

const findAllSliders = () => {
  return MainSlider.find();
}


// Update a slider 

const updateSlider = async(id, data) => {
  const slider = await findSliderByProperty('_id', data._id)
  if(slider){
    throw error('Slider already in use', 400)
  }

  return MainSlider.findByIdAndUpdate(id, {...data}, 
    {new: true})
}

module.exports = {
  findSliderByProperty,
  createSlider,
  findAllSliders,
  updateSlider

}