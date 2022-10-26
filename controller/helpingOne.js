const HelpingOne = require('../models/helpingOne');
const helpService = require('../service/helpingOne');

// Get All Help
const getAllHelp = async(req,res, next) => {
  try{
    const help = await helpService.findAllHelp();
    return res.status(200).json(help);
  }
  catch(e){
    next(e)
  }
};

// Get help by Id

const getHelpById = async(req,res, next) => {
  const helpId = req.params.helpId;
  try{
    const help = await helpService.findHelpByProperty('_id', helpId);
    if(!help){
      throw error('Help not found', 404);
    }
    return res.status(200).json(help)
  }
  catch(e){
    next(e)
  }
}

//post
const postHelp = async(req,res, next) => {
  const {description, title, point, bgImage} = req.body;

  try{
    const help = await helpService.createHelp({description, title, point, bgImage})
    return res.status(201).json(help)
  }
  catch(e){
    next(e)
  }
}




// Update help (some fields)

const patchHelpById = async(req, res, next) => {
  const helpId = req.params.helpId;
  const {description, title, point, bgImage} = req.body;

  try{
      const help = await helpService.findHelpByProperty('_id',helpId);

      if(!help){
        throw error('Help not found', 400);
      }

      help.description = description ?? help.description;
      help.point = point ?? help.point;
      help.title = title ?? help.title;
      help.bgImage = bgImage ?? help.bgImage;

      await help.save();

      return res. status(200).json(help);
  }
  catch(e){
    next(e)
  }
}

// Delete a Help

const deleteHelpById = async(req, res, next) => {
  const helpId = req.params.helpId;
  try{
    const help = await helpService.findHelpByProperty('_id', helpId);
    if(!help) {
      throw error('Help not found', 404)
    }

    await help.remove();

    return res.status(203).json({message: 'Help Deleted Successfully', help}).send()
  }
  catch(e){
    next(e)
  }
}

module.exports ={
  getAllHelp,
  getHelpById,
  patchHelpById,
  postHelp,
  deleteHelpById

}