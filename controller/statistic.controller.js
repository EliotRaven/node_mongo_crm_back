const {StatisticService} = require('../service/index')
const ResourceController = require('./resource.controller')

class StatisticController extends ResourceController {
  constructor(){
    super({service: StatisticService})
  }
}

module.exports = StatisticController