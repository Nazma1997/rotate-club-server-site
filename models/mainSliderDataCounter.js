const {Schema, model} = require('mongoose');

const mainSliderDataSchema = new Schema({
  // id: {type:String},
  // id: String,
  count: {type: Number, required: true},
  title: {type: String, required: true},
  image: {type: String, required: false},
  
})

const MainSliderDataCounter = model('MainSliderDataCounter', mainSliderDataSchema);

module.exports = MainSliderDataCounter;
