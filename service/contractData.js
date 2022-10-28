const ContractData = require('../models/contactData');


// It's not a method. It's a function for patch and delete method
const findContractDataByProperty = (key, value) => {
  if(key == '_id'){
    return ContractData.findById(value);
  }

  return ContractData.findOne({[key] : value});
}




// Get All Contract

const findAllContract = () => {
  return ContractData.find();
}

//post


const createContract = ({image, description, tel, email, officeAddress}) => {
 
  const contract = new VideoData({image, description, tel, email, officeAddress});
  return contract.save();
}


// Update a Contract

const updateContract = async(id, data) => {
  const contract = await findContractDataByProperty('_id', data._id)
  if(contract ){
    throw error('Contract already in use', 400)
  }

  return ContractData.findByIdAndUpdate(id, {...data}, 
    {new: true})
}

module.exports = {
  findContractDataByProperty,
  createContract,
  findAllContract,
  updateContract

}