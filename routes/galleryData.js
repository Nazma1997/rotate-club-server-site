const router = require('express').Router();
const galleryController = require('../controller/galleryData');

/**
 * update a gallery by id (some fields)
 * @method PATCH
 */
router.patch('/:galleryId', galleryController.patchGalleryById)

/**
 * Get All gallery
 * @method GET
 */

router.get('/', galleryController.getAllGallery);

/**
 * Post a gallery
 * @method POST
 */

 router.post('/', galleryController.postGallery);
 /**
 * Delete a gallery
 * @method DELETE
 */
router.delete('/:galleryId',galleryController.deleteGalleryById);



module.exports = router