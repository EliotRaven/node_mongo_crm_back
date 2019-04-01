const { RoleController } = require('../controller/index')
const express            = require('express');

const router             = express.Router();

router.get('/', RoleController.index);
router.post('/', RoleController.create);
router.get('/:id', RoleController.show);
router.put('/:id', RoleController.update);
router.delete('/:id', RoleController.remove);

module.exports = router