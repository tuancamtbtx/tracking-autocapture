import { Request, Response } from 'express'
import { EventEntity } from '@src/domain/entities/event.entity'
import SendSingleEventUseCase from '@src/use-cases/send-single-event'
import logger from '@src/utils/logger'

export class TrackingController {
  constructor(private readonly sendSingleEvent: SendSingleEventUseCase) {}
  async pushSingle(req: Request, res: Response): Promise<void> {
    logger.info('TrackingController sendEvent')
    try {
      let event = new EventEntity()
      await this.sendSingleEvent.execute(event)
      res.status(200).json({
        message: 'success'
      })
    } catch (error) {
      logger.error('TrackingController sendEvent error', error)
      res.status(500).json({
        message: 'error'
      })
    }
  }
}
