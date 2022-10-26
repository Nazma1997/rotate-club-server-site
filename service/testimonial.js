const Testimonial = require('../models/testimonial');


// It's not a method. It's a function for patch and delete method
const findTestimonialByProperty = (key, value) => {
  if(key == '_id'){
    return Testimonial.findById(value);
  }

  return Testimonial.findOne({[key] : value});
}




// Get All Testimonial

const findAllTestimonial = () => {
  return Testimonial.find();
}

//post

const createTestimonial = ({description, image, name, category}) => {
 


  const oneTestimonial = new Testimonial({description, image, name, category});
  return oneTestimonial.save();
}


// Update a testimonial

const updateTestimonial = async(id, data) => {
  const oneTestimonial = await findTestimonialByProperty('_id', data._id)
  if(oneTestimonial){
    throw error('Testimonial already in use', 400)
  }

  return Testimonial.findByIdAndUpdate(id, {...data}, 
    {new: true})
}

module.exports = {
  findTestimonialByProperty,
  createTestimonial,
  findAllTestimonial,
  updateTestimonial

}