const {Schema, model} = require('mongoose');

const aboutProgressDataSchema = new Schema({
  percentage: Number,
  title: String
     
})

const  AboutProgressData = model('AboutProgressData', aboutProgressDataSchema);

module.exports = AboutProgressData;
