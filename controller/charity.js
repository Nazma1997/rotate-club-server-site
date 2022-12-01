const Charity = require('../models/charity');
const charityService = require('../service/charity');

// Get All Slider 
const getAllCharity = async(req,res, next) => {
  try{
    const charity = await charityService.findAllCharity();
    return res.status(200).json(charity);
  }
  catch(e){
    next(e)
  }
};

// Get Slider by Id

const getCharityById = async(req,res, next) => {
  const charityId = req.params.charityId;
  try{
    const charity = await charityService.findCharityByProperty('_id', charityId);
    if(!charity){
      throw error('Charity not found', 404);
    }
    return res.status(200).json(charity)
  }
  catch(e){
    next(e)
  }
}

//post
const postCharity = async(req,res, next) => {
  const {percent, title, selectedFile} = req.body;

  try{
    const charity = await charityService.createCharity({percent, title, selectedFile})
    return res.status(201).json(charity)
  }
  catch(e){
    next(e)
  }
}




// Update Slider (some fields)

const patchCharityById = async(req, res, next) => {
  const charityId = req.params.charityId;
  const {percent, title, selectedFile} = req.body;

  try{
      const charity = await charityService.findCharityByProperty('_id',charityId);

      if(!charity){
        throw error('Charity not found', 400);
      }

      charity.percent = percent ?? percent.count;
      charity.title = title ?? charity.title;
      charity.selectedFile = selectedFile ?? charity.selectedFile;

      await charity.save();

      return res. status(200).json(charity);
  }
  catch(e){
    next(e)
  }
}
const deleteCharityById = async(req, res, next) => {
  const charityId = req.params.charityId;
  try{
    const charity = await charityService.findCharityByProperty('_id', charityId);
    if(!charity) {
      throw error('Progress not found', 404)
    }

    await charity.remove();

    return res.status(203).json({message: 'Progress Deleted Successfully', charity}).send()
  }
  catch(e){
    next(e)
  }
}

module.exports ={
  getAllCharity,
  getCharityById,
  patchCharityById,
  deleteCharityById,
  postCharity

}