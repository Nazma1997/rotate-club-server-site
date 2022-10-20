const {Schema, model} = require('mongoose');

const charityDataSchema = new Schema({
  // id: {type:String},
  // id: String,
 title:String,
 percent: Number,
 Img: String
     
})

const CharityData = model('CharityData', charityDataSchema);

module.exports = CharityData;
