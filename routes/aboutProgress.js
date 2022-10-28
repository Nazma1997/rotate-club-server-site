const router = require('express').Router();
const progressDataController = require('../controller/aboutProgress');

/**
 * update a progress by id (some fields)
 * @method PATCH
 */
router.patch('/:progressId', progressDataController.patchProgressById)

/**
 * Get All Progress
 * @method GET
 */

router.get('/', progressDataController.getAllProgress);

/**
 * Post a Progress
 * @method POST
 */

router.post('/', progressDataController.postProgress);

/**
 * Delete a progress
 * @method DELETE
 */
router.delete('/:progressId', progressDataController.deleteProgressById);

module.exports = router