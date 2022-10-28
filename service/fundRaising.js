const Fund = require('../models/fundRising');


// It's not a method. It's a function for patch and delete method
const findFundByProperty = (key, value) => {
  if(key == '_id'){
    return Fund.findById(value);
  }

  return Fund.findOne({[key] : value});
}

// Create new fund

const createFund = ({image,price,title,link}) => {

 
  const fund = new Fund({image,price,title,link});
  return fund.save();
}


// Get All Fund

const findAllFund = () => {
  return Fund.find();
}


// Update a Fund 

const updateFund = async(id, data) => {
  const fund  = await findFundByProperty('_id', data._id)
  if(fund){
    throw error('Fund already in use', 400)
  }

  return Fund.findByIdAndUpdate(id, {...data}, 
    {new: true})
}

module.exports = {
  findFundByProperty,
  createFund,
  findAllFund,
  updateFund

}