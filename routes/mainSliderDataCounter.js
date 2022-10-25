const router = require('express').Router();
const sliderDataCounterController = require('../controller/mainSliderDataCounter');

/**
 * update a slider by id (some fields)
 * @method PATCH
 */
router.patch('/:sliderId', sliderDataCounterController.patchSliderById)

/**
 * Get All Sliders
 * @method GET
 */

router.get('/', sliderDataCounterController.getAllSlider);

/**
 * Post a slider
 * @method POST
 */

router.post('/', sliderDataCounterController.postSlider);

/**
 * Delete a slider
 * @method DELETE
 */
router.delete('/:sliderId', sliderDataCounterController.deleteSliderById);

module.exports = router