const { UserController } = require('../controller/index')
const express            = require('express');

const router             = express.Router();

router.get('/', UserController.index);
router.post('/', UserController.create);
router.get('/:id', UserController.show);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.remove);

module.exports = router