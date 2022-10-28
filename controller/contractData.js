const ContractData = require('../models/contactData');
const contractService = require('../service/contractData');

// Get All Contract Data
const getAllContract = async(req,res, next) => {
  try{
    const contract = await contractService.findAllContract();
    return res.status(200).json(contract);
  }
  catch(e){
    next(e)
  }
};

// Get contract by id

const getContractById = async(req,res, next) => {
  const contractId = req.params.contractId;
  try{
    const contract = await contractService.findContractDataByProperty('_id', contractId);
    if(!contract){
      throw error('Contract not found', 404);
    }
    return res.status(200).json(contract)
  }
  catch(e){
    next(e)
  }
}

//post
const postContract = async(req,res, next) => {
  const {image, description, tel, email, officeAddress} = req.body;

  try{
    const contract = await contractService.createContract({image, description, tel, email, officeAddress})
    return res.status(201).json(contract)
  }
  catch(e){
    next(e)
  }
}




// Update contract  (some fields)

const patchContractId = async(req, res, next) => {
  const contractId = req.params.contractId;
  const {image, description, tel, email, officeAddress} = req.body;

  try{
      const contract = await contractService.findContractDataByProperty('_id',contractId);

      if(!contract){
        throw error('contract not found', 400);
      }

     
      
      contract.image = image ?? contract.image;
      contract.description = description ?? contract.description;
      contract.tel = tel ?? contract.tel;
      contract.email = email ?? contract.email;
      contract.officeAddress = officeAddress ?? contract.officeAddress;
      

      


      await contract.save();

      return res. status(200).json(contract);
  }
  catch(e){
    next(e)
  }
}

// Delete a contract

const deleteContractById = async(req, res, next) => {
  const contractId = req.params.contractId;
  try{
    const contract = await contractService.findContractDataByProperty('_id', contractId);
    if(!contract) {
      throw error('contract not found', 400)
    }

    await contract.remove();

    return res.status(203).json({message: 'Contract Deleted Successfully', contract}).send()
  }
  catch(e){
    next(e)
  }
}

module.exports ={
  getAllContract,
  getContractById,
  patchContractId,
  postContract,
  deleteContractById

}