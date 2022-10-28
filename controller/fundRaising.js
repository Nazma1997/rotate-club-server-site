const Fund = require('../models/fundRising');
const fundService = require('../service/fundRaising');

// Get All Fund
const getAllFund = async(req,res, next) => {
  try{
    const fund = await fundService.findAllFund();
    return res.status(200).json(fund);
  }
  catch(e){
    next(e)
  }
};

// Get Fund by Id

const getFundById = async(req,res, next) => {
  const fundId = req.params.fundId;
  try{
    const fund = await fundService.findFundByProperty('_id', fundId);
    if(!fund){
      throw error('Fund not found', 404);
    }
    return res.status(200).json(fund)
  }
  catch(e){
    next(e)
  }
}

// Post new Fund
const postFund = async(req,res, next) => {
  const {image,price,title,link} = req.body;

  try{
    const fund = await fundService.createFund({image,price,title,link})
    return res.status(201).json(fund)
  }
  catch(e){
    next(e)
  }
}

// Delete a Fund

const deleteFundById = async(req, res, next) => {
  const fundId = req.params.fundId;
  try{
    const fund = await fundService.findFundByProperty('_id', fundId);
    if(!fund) {
      throw error('Fund not found', 404)
    }

    await fund.remove();

    return res.status(203).json({message: 'Fund Deleted Successfully', fund}).send()
  }
  catch(e){
    next(e)
  }
}

// Update Fund (some fields)

const patchFundById = async(req, res, next) => {
  const fundId = req.params.fundId;
  const {image,price,title,link} = req.body;

  try{
      const fund = await fundService.findFundByProperty('_id',fundId);

      if(!fund){
        throw error('Fund not found', 400);
      }

      fund.image = image ?? fund.image;
      fund.price = price ?? fund.price;
      fund.title = title ?? fund.title;
      fund.link = link ?? fund.link;
    
      await fund.save();

      return res. status(200).json(fund);
  }
  catch(e){
    next(e)
  }
}

module.exports ={
  getAllFund,
  getFundById,
  postFund,
  deleteFundById,
  patchFundById

}