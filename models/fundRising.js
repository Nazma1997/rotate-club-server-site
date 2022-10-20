const {Schema, model} = require('mongoose');

const fundRisingDataSchema = new Schema({
  image: String,
  price: String,
  title: String,
  link: String
     
})

const  FundRisingPageData = model('FundRisingPageData', fundRisingDataSchema);

module.exports = FundRisingPageData;
