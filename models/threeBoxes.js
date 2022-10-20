const {Schema, model} = require('mongoose');

const threeBoxesDataSchema = new Schema({
 icon: String,
 className: String,
 title: String,
 description: String
     
})

const ThreeBoxesData = model('ThreeBoxesData',  threeBoxesDataSchema );

module.exports = ThreeBoxesData;
