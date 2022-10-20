const {Schema, model} = require('mongoose');

const charityDataSchema = new Schema({
  // id: {type:String},
  // id: String,
 title:String,
 percent: Number,
 img: String
     
})

const CharityData = model('CharityData', charityDataSchema);

module.exports = CharityData;
