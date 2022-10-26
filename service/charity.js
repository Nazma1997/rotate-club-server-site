const Charity = require('../models/charity');


// It's not a method. It's a function for patch and delete method
const findCharityByProperty = (key, value) => {
  if(key == '_id'){
    return Charity.findById(value);
  }

  return Charity.findOne({[key] : value});
}




// Get All sliders 

const findAllCharity = () => {
  return Charity.find();
}

//post

const createCharity = ({percent, title, image}) => {

  const charity = new Charity({percent, title, image});
  return charity.save();
}


// Update a slider 

const updateCharity = async(id, data) => {
  const charity = await findCharityByProperty('_id', data._id)
  if(charity){
    throw error('Charity already in use', 400)
  }

  return Charity.findByIdAndUpdate(id, {...data}, 
    {new: true})
}

module.exports = {
  findCharityByProperty,
  createCharity,
  findAllCharity,
  updateCharity

}