const HelpThem = require('../models/helpThem');
const helpThemService = require('../service/helpThem');

// Get All help them 
const getAllHelpThem = async(req,res, next) => {
  try{
    const oneHelpThem = await helpThemService.findAllHelpThem();
    return res.status(200).json(oneHelpThem);
  }
  catch(e){
    next(e)
  }
};

// Get help them  by Id

const getHelpThemById = async(req,res, next) => {
  const helpThemId = req.params.helpThemId;
  try{
    const oneHelpThem = await helpThemService.findHelpThemByProperty('_id', helpThemId);
    if(!oneHelpThem){
      throw error('help them not found', 404);
    }
    return res.status(200).json(oneHelpThem)
  }
  catch(e){
    next(e)
  }
}

//post
const postHelpThem = async(req,res, next) => {
  const {icon,title, subTitle} = req.body;

  try{
    const oneHelpThem = await helpThemService.createHelpThem({icon,title, subTitle})
    return res.status(201).json(oneHelpThem)
  }
  catch(e){
    next(e)
  }
}




// Update help them  (some fields)

const patchHelpThemById = async(req, res, next) => {
  const helpThemId = req.params.helpThemId;
  const {icon,title, subTitle} = req.body;

  try{
      const oneHelpThem = await helpThemService.findHelpThemByProperty('_id',helpThemId);

      if(!oneHelpThem){
        throw error('help them not found', 400);
      }

     
      oneHelpThem.icon = icon ?? oneHelpThem.icon;
      oneHelpThem.title = title ?? oneHelpThem.title;
      oneHelpThem.subTitle = subTitle ?? oneHelpThem.subTitle;


      await oneHelpThem.save();

      return res. status(200).json(oneHelpThem);
  }
  catch(e){
    next(e)
  }
}

// Delete a help them

const deleteHelpThemById = async(req, res, next) => {
  const helpThemId = req.params.helpThemId;
  try{
    const oneHelpThem = await helpThemService.findHelpThemByProperty('_id', helpThemId);
    if(!oneHelpThem) {
      throw error('help them not found', 404)
    }

    await oneHelpThem.remove();

    return res.status(203).json({message: 'help them Deleted Successfully', oneHelpThem}).send()
  }
  catch(e){
    next(e)
  }
}

module.exports ={
  getAllHelpThem,
  getHelpThemById,
  patchHelpThemById,
  postHelpThem,
  deleteHelpThemById

}