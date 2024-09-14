import { Request, Response } from 'express'
import { validate } from 'class-validator'

import { EventEntity } from '@src/domain/entities/event.entity'
import EventDto from '@src/apps/dto/event.dto'
import SendSingleEventUseCase from '@src/use-cases/send-single-event'
import logger from '@src/utils/logger'
import EventDIContainer from '@src/infra/container/di'

export class TrackingController {
  constructor(private readonly sendSingleEvent: SendSingleEventUseCase) {}
  async pushSingle(req: Request, res: Response) {
    try {
      const dto = Object.assign(new EventDto(), req.body)
      const errors = await validate(dto)
      if (errors.length > 0) {
        return res.status(400).json({ errors })
      }
      let event = new EventEntity()
      event.clientId = dto.clientId
      event.actionName = dto.actionName
      event.createdAt = dto.createdAt
      event.eventProperties = dto.eventProperties
      event.userProperties = dto.userProperties
      event.deviceProperties = dto.deviceProperties
      event.eventType = dto.eventType
      event.page = dto.page
      event.referrer = dto.referrer
      event.platform = dto.platform
      event.version = dto.version
      let usecase:SendSingleEventUseCase = EventDIContainer.get('SendSingleEventUseCase')

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
