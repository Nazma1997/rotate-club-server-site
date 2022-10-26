const ThreeBoxes = require('../models/threeBoxes');


// It's not a method. It's a function for patch and delete method
const findThreeBoxesByProperty = (key, value) => {
  if(key == '_id'){
    return ThreeBoxes.findById(value);
  }

  return ThreeBoxes.findOne({[key] : value});
}




// Get All Boxes 

const findAllBoxes = () => {
  return ThreeBoxes.find();
}

//post

const createBoxes = ({icon,className, title, description}) => {
  
  const box = new ThreeBoxes({icon,className, title, description});
  return box.save();
}


// Update a Box

const updateBox = async(id, data) => {
  const box = await findThreeBoxesByProperty('_id', data._id)
  if(box){
    throw error('Box already in use', 400)
  }

  return ThreeBoxes.findByIdAndUpdate(id, {...data}, 
    {new: true})
}

module.exports = {
  findThreeBoxesByProperty,
  createBoxes,
  findAllBoxes,
  updateBox

}