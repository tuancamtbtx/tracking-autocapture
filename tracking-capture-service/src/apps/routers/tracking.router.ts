import { Router } from 'express'
import { TrackingController } from '@src/apps/controllers/tracking.controller'
import EventDIContainer from '@src/infra/container/di'
import logger from '@src/utils/logger'

class TrackingRouter {
  router = Router()
  controller: TrackingController
  constructor() {
    logger.info('TrackingRouter Initialized')
    this.intializeRoutes()
    this.controller = new TrackingController(EventDIContainer.get('SendSingleEventUseCase'))
  }
  public intializeRoutes() {
    this.router.post('/single', (req, res) => {
      this.controller.pushSingle(req, res)
    })
  }
}

export default new TrackingRouter().router
