const Event = require('../models/eventsPage');


// It's not a method. It's a function for patch and delete method
const findEventByProperty = (key, value) => {
  if(key == '_id'){
    return Event.findById(value);
  }

  return Event.findOne({[key] : value});
}

// Create new Event

const createEvent = ({image,date}) => {
 
  const event = new Event({image,date});
  return event.save();
}


// Get All Events

const findAllEvents = () => {
  return Event.find();
}


// Update a Event 

const updateEvent = async(id, data) => {
  const event  = await findEventByProperty('_id', data._id)
  if(event){
    throw error('Event already in use', 400)
  }

  return Event.findByIdAndUpdate(id, {...data}, 
    {new: true})
}

module.exports = {
  findEventByProperty,
  createEvent,
  findAllEvents,
  updateEvent

}