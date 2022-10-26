const Causes = require('../models/causesData');


// It's not a method. It's a function for patch and delete method
const findCausesByProperty = (key, value) => {
  if(key == '_id'){
    return Causes.findById(value);
  }

  return Causes.findOne({[key] : value});
}

// Create new post 

const createCauses = ({image,category, title, shortDescription,description, raised, goal}) => {
 

  const cause = new Causes({image,category, title, shortDescription,description, raised, goal});
  return cause.save();
}


// Get All sliders 

const findAllCauses = () => {
  return Causes.find();
}


// Update a slider 

const updateCauses = async(id, data) => {
  const cause = await findCausesByProperty('_id', data._id)
  if(cause){
    throw error('Slider already in use', 400)
  }

  return Causes.findByIdAndUpdate(id, {...data}, 
    {new: true})
}

module.exports = {
  findCausesByProperty,
  createCauses,
  findAllCauses,
  updateCauses

}