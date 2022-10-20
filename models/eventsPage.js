const {Schema, model} = require('mongoose');

const eventsPageDataSchema = new Schema({
  image: String,
  date: String,
  // title: String
     
})

const  EventsPageData = model('EventsPageData', eventsPageDataSchema);

module.exports = EventsPageData;
