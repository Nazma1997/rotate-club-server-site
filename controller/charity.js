const Charity = require('../models/charity');
const charityService = require('../service/charity');

// Get All Slider 
const getAllCharity = async(req,res, next) => {
  try{
    const charity = await charityService.findAllSliders();
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
    const charity = await charityService.findSliderByProperty('_id', charityId);
    if(!charity){
      throw error('Charity not found', 404);
    }
    return res.status(200).json(charity)
  }
  catch(e){
    next(e)
  }
}




// Update Slider (some fields)

const patchCharityById = async(req, res, next) => {
  const charityId = req.params.charityId;
  const {percent, title, image} = req.body;

  try{
      const charity = await charityService.findSliderByProperty('_id',charityId);

      if(!charity){
        throw error('Charity not found', 400);
      }

      charity.percent = percent ?? percent.count;
      charity.title = title ?? charity.title;
      charity.image = image ?? charity.image;

      await charity.save();

      return res. status(200).json(charity);
  }
  catch(e){
    next(e)
  }
}

module.exports ={
  getAllCharity,
  getCharityById,
  patchCharityById

}