const router = require('express').Router();
const helpController = require('../controller/helpingOne');

/**
 * update a help by id (some fields)
 * @method PATCH
 */
router.patch('/:helpId', helpController.patchHelpById)

/**
 * Get All Help
 * @method GET
 */

router.get('/', helpController.getAllHelp);

/**
 * Post a Help
 * @method POST
 */

 router.post('/', helpController.postHelp);
 /**
 * Delete a Help
 * @method DELETE
 */
router.delete('/:helpId',helpController.deleteHelpById);



module.exports = router