const EventData = require('../models/eventsPage');
const eventService = require('../service/eventPage');

// Get All Events
const getAllEvent = async(req,res, next) => {
  try{
    const event = await eventService.findAllEvents();
    return res.status(200).json(event);
  }
  catch(e){
    next(e)
  }
};

// Get Events by Id

const getEventById = async(req,res, next) => {
  const eventId = req.params.eventId;
  try{
    const event = await eventService.findEventByProperty('_id', eventId);
    if(!event){
      throw error('Events not found', 404);
    }
    return res.status(200).json(event)
  }
  catch(e){
    next(e)
  }
}

// Post new Event
const postEvent = async(req,res, next) => {
  const {image,date} = req.body;

  try{
    const event = await eventService.createEvent({image, date})
    return res.status(201).json(event)
  }
  catch(e){
    next(e)
  }
}

// Delete a Event

const deleteEventById = async(req, res, next) => {
  const eventId = req.params.eventId;
  try{
    const event = await eventService.findEventByProperty('_id', eventId);
    if(!event) {
      throw error('Event not found', 404)
    }

    await event.remove();

    return res.status(203).json({message: 'Event Deleted Successfully', event}).send()
  }
  catch(e){
    next(e)
  }
}

// Update Event (some fields)

const patchEventById = async(req, res, next) => {
  const eventId = req.params.eventId;
  const {image, date} = req.body;

  try{
      const event = await eventService.findEventByProperty('_id',eventId);

      if(!event){
        throw error('Event not found', 400);
      }

      event.image = image ?? event.image;
      event.date = date ?? event.date;
    
      await event.save();

      return res. status(200).json(event);
  }
  catch(e){
    next(e)
  }
}

module.exports ={
  getAllEvent,
  getEventById,
  postEvent,
  deleteEventById,
  patchEventById

}