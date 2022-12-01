const {Schema, model} = require('mongoose');

const charityDataSchema = new Schema({
 
 title:String,
 percent: Number,
 selectedFile: String
     
})

const CharityData = model('CharityData', charityDataSchema);

module.exports = CharityData;
