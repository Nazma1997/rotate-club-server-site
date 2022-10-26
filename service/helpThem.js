const HelpThem = require('../models/helpThem');


// It's not a method. It's a function for patch and delete method
const findHelpThemByProperty = (key, value) => {
  if(key == '_id'){
    return HelpThem.findById(value);
  }

  return HelpThem.findOne({[key] : value});
}




// Get All Help them

const findAllHelpThem = () => {
  return HelpThem.find();
}

//post

const createHelpThem = ({icon,title, subTitle}) => {
 
  const oneHelpThem = new HelpThem({icon,title, subTitle});
  return oneHelpThem.save();
}


// Update a help them

const updateHelpThem = async(id, data) => {
  const oneHelpThem = await findHelpThemByProperty('_id', data._id)
  if(oneHelpThem ){
    throw error('Help them already in use', 400)
  }

  return HelpThem.findByIdAndUpdate(id, {...data}, 
    {new: true})
}

module.exports = {
  findHelpThemByProperty,
  createHelpThem,
  findAllHelpThem,
  updateHelpThem

}