const router = require('express').Router();
const contractController = require('../controller/contractData');

/**
 * update a contract by id (some fields)
 * @method PATCH
 */
router.patch('/:contractId', contractController.patchContractId)

/**
 * Get All Contract
 * @method GET
 */

router.get('/', contractController.getAllContract);

/**
 * Post a Contract
 * @method POST
 */

 router.post('/', contractController.postContract);
 /**
 * Delete a Contract
 * @method DELETE
 */
router.delete('/:contractId',contractController.deleteContractById);



module.exports = router