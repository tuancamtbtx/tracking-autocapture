import { Router } from 'express'
import { TrackingController } from '@src/app/controllers/tracking.controller'
import EventDIContainer from '@src/infrastructure/binds/di'
class TrackingRouter {
  router = Router()
  controller: TrackingController
  constructor() {
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
