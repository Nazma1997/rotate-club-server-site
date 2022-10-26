const Testimonial = require('../models/testimonial');
const testimonialService = require('../service/testimonial');

// Get All testimonial
const getAllTestimonial = async(req,res, next) => {
  try{
    const oneTestimonial = await testimonialService.findAllTestimonial();
    return res.status(200).json(oneTestimonial);
  }
  catch(e){
    next(e)
  }
};

// Get testimonial by Id

const getTestimonialById = async(req,res, next) => {
  const testimonialId = req.params.testimonialId;
  try{
    const oneTestimonial = await testimonialService.findTestimonialByProperty('_id', testimonialId);
    if(!oneTestimonial){
      throw error('testimonial not found', 404);
    }
    return res.status(200).json(oneTestimonial)
  }
  catch(e){
    next(e)
  }
}

//post
const postTestimonial = async(req,res, next) => {
  const {description, image, name, category} = req.body;

  try{
    const oneTestimonial = await testimonialService.createTestimonial({description, image, name, category})
    return res.status(201).json(oneTestimonial)
  }
  catch(e){
    next(e)
  }
}




// Update testimonial (some fields)

const patchTestimonialById = async(req, res, next) => {
  const testimonialId = req.params.testimonialId;
  const {description, image, name, category} = req.body;

  try{
      const oneTestimonial = await testimonialService.findTestimonialByProperty('_id',testimonialId);

      if(!oneTestimonial){
        throw error('Testimonial not found', 400);
      }

     
      oneTestimonial.description = description ?? oneTestimonial.description;
      oneTestimonial.image = image ?? oneTestimonial.image;
      oneTestimonial.name = name ?? oneTestimonial.name;
      oneTestimonial.category = category ?? oneTestimonial.category;
      await oneTestimonial.save();

      return res. status(200).json(oneTestimonial);
  }
  catch(e){
    next(e)
  }
}

// Delete a Testimonial

const deleteTestimonialById = async(req, res, next) => {
  const testimonialId = req.params.testimonialId;
  try{
    const oneTestimonial = await testimonialService.findTestimonialByProperty('_id', testimonialId);
    if(!oneTestimonial) {
      throw error('testimonial not found', 404)
    }

    await oneTestimonial.remove();

    return res.status(203).json({message: 'testimonial Deleted Successfully', oneTestimonial}).send()
  }
  catch(e){
    next(e)
  }
}

module.exports ={
  getAllTestimonial,
  getTestimonialById,
  patchTestimonialById,
  postTestimonial,
  deleteTestimonialById

}