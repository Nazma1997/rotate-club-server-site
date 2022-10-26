const router = require('express').Router();
const testimonialController = require('../controller/testimonial');

/**
 * update a testimonial by id (some fields)
 * @method PATCH
 */
router.patch('/:testimonialId', testimonialController.patchTestimonialById)

/**
 * Get All testimonial
 * @method GET
 */

router.get('/', testimonialController.getAllTestimonial);

/**
 * Post a testimonial
 * @method POST
 */

 router.post('/', testimonialController.postTestimonial);
 /**
 * Delete a testimonial
 * @method DELETE
 */
router.delete('/:testimonialId',testimonialController.deleteTestimonialById);



module.exports = router