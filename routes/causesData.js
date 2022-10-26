const router = require('express').Router();
const causesDataController = require('../controller/causesData');

/**
 * update a slider by id (some fields)
 * @method PATCH
 */
router.patch('/:causeId', causesDataController.patchCauseById)

/**
 * Get All Sliders
 * @method GET
 */

router.get('/', causesDataController.getAllCauses);

/**
 * Post a slider
 * @method POST
 */

router.post('/', causesDataController.postCauses);

/**
 * Delete a slider
 * @method DELETE
 */
router.delete('/:causeId', causesDataController.deleteCauseById);

module.exports = router