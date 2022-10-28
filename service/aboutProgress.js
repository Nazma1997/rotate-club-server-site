const AboutProgress = require('../models/aboutProgress');


// It's not a method. It's a function for patch and delete method
const findProgressByProperty = (key, value) => {
  if(key == '_id'){
    return AboutProgress.findById(value);
  }

  return AboutProgress.findOne({[key] : value});
}

// Create new progress

const createProgress = ({percent,donar,title}) => {
 
  const progress = new AboutProgress({percent,donar,title});
  return progress.save();
}


// Get All Progress

const findAllProgress = () => {
  return AboutProgress.find();
}


// Update a Progress 

const updateProgress = async(id, data) => {
  const progress = await findProgressByProperty('_id', data._id)
  if(progress){
    throw error('Progress already in use', 400)
  }

  return AboutProgress.findByIdAndUpdate(id, {...data}, 
    {new: true})
}

module.exports = {
  findProgressByProperty,
  createProgress,
  findAllProgress,
  updateProgress

}