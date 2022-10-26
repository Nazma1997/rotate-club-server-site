const router = require('express').Router();
const helpThemController = require('../controller/helpThem');

/**
 * update a help them by id (some fields)
 * @method PATCH
 */
router.patch('/:helpThemId', helpThemController.patchHelpThemById)

/**
 * Get All help them
 * @method GET
 */

router.get('/', helpThemController.getAllHelpThem);

/**
 * Post a help them
 * @method POST
 */

 router.post('/', helpThemController.postHelpThem);
 /**
 * Delete a help them
 * @method DELETE
 */
router.delete('/:helpThemId',helpThemController.deleteHelpThemById);



module.exports = router