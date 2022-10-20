const {Schema, model} = require('mongoose');

const testimonialDataSchema = new Schema({
 description: String,
 image: String,
 name: String,
 category: String
     
})

const TestimonialData = model('TestimonialData',  testimonialDataSchema );

module.exports = TestimonialData;
