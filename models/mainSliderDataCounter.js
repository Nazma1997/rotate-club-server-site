const {Schema, model} = require('mongoose');

const mainSliderDataSchema = new Schema({
  // id: {type:String},
  // id: String,
  count: {type: String, required: true},
  title: {type: String, required: true},
  image: {type: String, required: true},
  
})

const MainSliderDataCounter = model('MainSliderDataCounter', mainSliderDataSchema);

module.exports = MainSliderDataCounter;
