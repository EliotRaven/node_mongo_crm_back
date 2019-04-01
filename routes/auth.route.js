const {AuthController} = require('../controller/index')
const express          = require('express');

const router           = express.Router();

router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout)

module.exports = router