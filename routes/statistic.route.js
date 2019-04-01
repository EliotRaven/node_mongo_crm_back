const { StatisticController } = require('../controller/index')
const express                 = require('express');

const router                  = express.Router();

router.get('/', StatisticController.index);

module.exports = router