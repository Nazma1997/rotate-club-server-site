const {Schema, model} = require('mongoose');

const mainSliderDataSchema = new Schema({
  // id: {type:String},
  // id: String,
  count:  Number,
  title: String,
  image: String,
  
})

const MainSliderDataCounter = model('MainSliderDataCounter', mainSliderDataSchema);

module.exports = MainSliderDataCounter;
