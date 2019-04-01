const StatisticController     = require('./statistic.controller')
const express                 = require('express');
const router                  = express.Router();

router.get('/', StatisticController.index);

module.exports = router