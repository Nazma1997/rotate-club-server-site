const {Schema, model} = require('mongoose');

const helpThemDataSchema = new Schema({
 icon: String,
 title: String,
 subTitle: String
     
})

const HelpThemData = model('HelpThemData',  helpThemDataSchema );

module.exports = HelpThemData;
