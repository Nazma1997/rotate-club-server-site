const router = require('express').Router();
const videoController = require('../controller/videoData');

/**
 * update a video by id (some fields)
 * @method PATCH
 */
router.patch('/:videoId', videoController.patchVideoId)

/**
 * Get All video
 * @method GET
 */

router.get('/', videoController.getAllVideo);

/**
 * Post a video
 * @method POST
 */

 router.post('/', videoController.postVideo);
 /**
 * Delete a video
 * @method DELETE
 */
router.delete('/:helpThemId',videoController.deleteVideoById);



module.exports = router