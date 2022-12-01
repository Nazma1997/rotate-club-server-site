const router = require('express').Router();
const charityController = require('../controller/charity');

/**
 * update a slider by id (some fields)
 * @method PATCH
 */
router.patch('/:charityId', charityController.patchCharityById)

/**
 * Get All Sliders
 * @method GET
 */

router.get('/', charityController.getAllCharity);

/**
 * Post a slider
 * @method POST
 */

 router.post('/', charityController.postCharity);


 router.delete('/:charityId', charityController.deleteCharityById);

module.exports = router