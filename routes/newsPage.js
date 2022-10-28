const router = require('express').Router();
const newsPageController = require('../controller/newsPage');

/**
 * update a news by id (some fields)
 * @method PATCH
 */
router.patch('/:newsId', newsPageController.patchNewsById)

/**
 * Get All News
 * @method GET
 */

router.get('/', newsPageController.getAllNews);

/**
 * Post a News
 * @method POST
 */

 router.post('/', newsPageController.postNews);
 /**
 * Delete a News
 * @method DELETE
 */
router.delete('/:newsId',newsPageController.deleteNewsById);



module.exports = router