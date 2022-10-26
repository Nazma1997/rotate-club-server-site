const ThreeBoxes = require('../models/threeBoxes');
const boxService = require('../service/threeBoxes');

// Get All Boxes 
const getAllBoxes = async(req,res, next) => {
  try{
    const box = await boxService.findAllBoxes();
    return res.status(200).json(box);
  }
  catch(e){
    next(e)
  }
};

// Get Box by Id

const getBoxById = async(req,res, next) => {
  const boxId = req.params.boxId;
  try{
    const box = await boxService.findThreeBoxesByProperty('_id', boxId);
    if(!box){
      throw error('Box not found', 404);
    }
    return res.status(200).json(box)
  }
  catch(e){
    next(e)
  }
}

//post
const postBox = async(req,res, next) => {
  const {icon,className, title, description} = req.body;

  try{
    const box = await boxService.createBoxes({icon,className, title, description})
    return res.status(201).json(box)
  }
  catch(e){
    next(e)
  }
}




// Update Box (some fields)

const patchBoxById = async(req, res, next) => {
  const boxId = req.params.boxId;
  const {icon,className, title, description} = req.body;

  try{
      const box = await boxService.findThreeBoxesByProperty('_id',boxId);

      if(!box){
        throw error('box not found', 400);
      }

      box.icon = icon ?? box.icon;
      box.className = className ?? box.className;
      box.title = title ?? box.title;
      box.description = description ?? box.description;

      await box.save();

      return res. status(200).json(box);
  }
  catch(e){
    next(e)
  }
}

// Delete a slider 

const deleteBoxById = async(req, res, next) => {
  const boxId = req.params.boxId;
  try{
    const box = await boxService.findThreeBoxesByProperty('_id', boxId);
    if(!box) {
      throw error('Box not found', 404)
    }

    await box.remove();

    return res.status(203).json({message: 'Box Deleted Successfully', box}).send()
  }
  catch(e){
    next(e)
  }
}

module.exports ={
  getAllBoxes,
  getBoxById,
  patchBoxById,
  postBox,
  deleteBoxById

}