const router = require('express').Router();
const fundController = require('../controller/fundRaising');

/**
 * update a fund by id (some fields)
 * @method PATCH
 */
router.patch('/:fundId', fundController.patchFundById)

/**
 * Get All Fund
 * @method GET
 */

router.get('/', fundController.getAllFund);

/**
 * Post a Fund
 * @method POST
 */

 router.post('/', fundController.postFund);
 /**
 * Delete a fund
 * @method DELETE
 */
router.delete('/:fundId',fundController.deleteFundById);



module.exports = router