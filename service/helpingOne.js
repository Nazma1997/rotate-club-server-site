const HelpingOne = require('../models/helpingOne');


// It's not a method. It's a function for patch and delete method
const findHelpByProperty = (key, value) => {
  if(key == '_id'){
    return HelpingOne.findById(value);
  }

  return HelpingOne.findOne({[key] : value});
}




// Get All Help

const findAllHelp = () => {
  return HelpingOne.find();
}

//post

const createHelp = ({description, title, point, bgImage}) => {
 
  
  const help = new HelpingOne({description, title, point, bgImage});
  return help.save();
}


// Update a Help

const updateHelp = async(id, data) => {
  const help = await findHelpByProperty('_id', data._id)
  if(help){
    throw error('Help already in use', 400)
  }

  return HelpingOne.findByIdAndUpdate(id, {...data}, 
    {new: true})
}

module.exports = {
  findHelpByProperty,
  createHelp,
  findAllHelp,
  updateHelp

}