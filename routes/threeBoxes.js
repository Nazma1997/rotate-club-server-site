const router = require('express').Router();
const boxController = require('../controller/threeBoxes');

/**
 * update a box by id (some fields)
 * @method PATCH
 */
router.patch('/:boxId', boxController.patchBoxById)

/**
 * Get All Boxes
 * @method GET
 */

router.get('/', boxController.getAllBoxes);

/**
 * Post a Box
 * @method POST
 */

 router.post('/', boxController.postBox);
 /**
 * Delete a box
 * @method DELETE
 */
router.delete('/:boxId',boxController.deleteBoxById);



module.exports = router