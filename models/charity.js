const {Schema, model} = require('mongoose');

const charityDataSchema = new Schema({
 
 title:String,
 percent: Number,
 image: String
     
})

const CharityData = model('CharityData', charityDataSchema);

module.exports = CharityData;
