const router = require('express').Router();
const newsDataController = require('../controller/newsData');

/**
 * update a news by id (some fields)
 * @method PATCH
 */
router.patch('/:newsId', newsDataController.patchNewsById)

/**
 * Get All News
 * @method GET
 */

router.get('/', newsDataController.getAllNews);

/**
 * Post a news
 * @method POST
 */

router.post('/', newsDataController.postNews);

/**
 * Delete a news
 * @method DELETE
 */
router.delete('/:newsId', newsDataController.deleteNewsById);

module.exports = router