import SendSingleEventUseCase from '@src/use-cases/send-single-event'
import { EventEntity } from '@src/domain/entities/event.entity'

export default class TrackingService {
  constructor(private readonly sendSingleEvent: SendSingleEventUseCase) {}
  async postSingleEvent(eventDto: any): Promise<void> {
    let event = new EventEntity()
    event.clientId = eventDto.clientId
    event.actionName = eventDto.actionName
    event.createdAt = eventDto.createdAt
    event.eventProperties = eventDto.eventProperties
    event.userProperties = eventDto.userProperties
    event.deviceProperties = eventDto.deviceProperties
    event.eventType = eventDto.eventType
    event.page = eventDto.page
    event.referrer = eventDto.referrer
    event.platform = eventDto.platform
    event.version = eventDto.version
    return await this.sendSingleEvent.execute(event)
  }
}
