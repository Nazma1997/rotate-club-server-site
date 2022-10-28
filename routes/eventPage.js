const router = require('express').Router();
const eventDataController = require('../controller/eventPage');

/**
 * update a event by id (some fields)
 * @method PATCH
 */
router.patch('/:eventId', eventDataController.patchEventById)

/**
 * Get All Event
 * @method GET
 */

router.get('/', eventDataController.getAllEvent);

/**
 * Post a Event
 * @method POST
 */

router.post('/', eventDataController.postEvent);

/**
 * Delete a Event
 * @method DELETE
 */
router.delete('/:eventId', eventDataController.deleteEventById);

module.exports = router