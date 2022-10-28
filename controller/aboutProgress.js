const AboutProgress = require('../models/aboutProgress');
const progressService = require('../service/aboutProgress');

// Get All progress
const getAllProgress = async(req,res, next) => {
  try{
    const progress = await progressService.findAllProgress();
    return res.status(200).json(progress);
  }
  catch(e){
    next(e)
  }
};

// Get Progress by Id

const getProgressById = async(req,res, next) => {
  const progressId = req.params.progressId;
  try{
    const progress = await progressService.findProgressByProperty('_id', progressId);
    if(!progress){
      throw error('Progress not found', 404);
    }
    return res.status(200).json(progress)
  }
  catch(e){
    next(e)
  }
}

// Post new Progress
const postProgress = async(req,res, next) => {
  const {percent,title,donar} = req.body;

  try{
    const progress = await progressService.createProgress({percent, title, donar})
    return res.status(201).json(percent)
  }
  catch(e){
    next(e)
  }
}

// Delete a Progress

const deleteProgressById = async(req, res, next) => {
  const progressId = req.params.progressId;
  try{
    const progress = await progressService.findProgressByProperty('_id', progressId);
    if(!progress) {
      throw error('Progress not found', 404)
    }

    await progress.remove();

    return res.status(203).json({message: 'Progress Deleted Successfully', progress}).send()
  }
  catch(e){
    next(e)
  }
}

// Update Progress (some fields)

const patchProgressById = async(req, res, next) => {
  const progressId = req.params.progressId;
  const {percent, title, donar} = req.body;

  try{
      const progress = await progressService.findProgressByProperty('_id',progressId);

      if(!progress){
        throw error('Progress not found', 400);
      }

      progress.percent = percent ?? progress.percent;
      progress.title = title ?? progress.title;
      progress.donar = donar ?? progress.donar;
      
    
      await progress.save();

      return res. status(200).json(progress);
  }
  catch(e){
    next(e)
  }
}

module.exports ={
  getAllProgress,
  getProgressById,
  postProgress,
  deleteProgressById,
  patchProgressById

}