const Causes = require('../models/causesData');
const causesService = require('../service/causesData');

// Get All Causes
const getAllCauses = async(req,res, next) => {
  try{
    const cause = await causesService.findAllCauses();
    return res.status(200).json(cause);
  }
  catch(e){
    next(e)
  }
};

// Get Cause by Id

const getCausesById = async(req,res, next) => {
  const causeId = req.params.causeId;
  try{
    const cause = await causesService.findCausesByProperty('_id', causeId);
    if(!cause){
      throw error('Cause not found', 404);
    }
    return res.status(200).json(cause)
  }
  catch(e){
    next(e)
  }
}

// Post new Cause
const postCauses = async(req,res, next) => {
  const {image,category, title, shortDescription,description, raised, goal} = req.body;

  try{
    const cause = await causesService.createCauses({image,category, title, shortDescription,description, raised, goal})
    return res.status(201).json(cause)
  }
  catch(e){
    next(e)
  }
}

// Delete a slider 

const deleteCauseById = async(req, res, next) => {
  const causeId = req.params.causeId;
  try{
    const cause = await causesService.findCausesByProperty('_id', causeId);
    if(!cause) {
      throw error('Cause not found', 404)
    }

    await cause.remove();

    return res.status(203).json({message: 'Cause Deleted Successfully', cause}).send()
  }
  catch(e){
    next(e)
  }
}

// Update Slider (some fields)

const patchCauseById = async(req, res, next) => {
  const causeId = req.params.causeId;
  const {image,category, title, shortDescription,description, raised, goal} = req.body;

  try{
      const cause = await causesService.findCausesByProperty('_id',causeId);

      if(!cause){
        throw error('Cause not found', 400);
      }

      cause.category = category ?? cause.category;
      cause.title = title ?? cause.title;
      cause.image = image ?? cause.image;
      cause.shortDescription = shortDescription ?? cause.shortDescription;
      cause.description = description ?? cause.description;
      cause.raised = raised ?? cause.raised;
      cause.goal = goal ?? cause.goal;



      await cause.save();

      return res. status(200).json(cause);
  }
  catch(e){
    next(e)
  }
}

module.exports ={
  getAllCauses,
  getCausesById,
  postCauses,
  deleteCauseById,
  patchCauseById

}