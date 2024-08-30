import IEventRepository from '@src/domain/interface/event'
import { EventEntity } from '@src/domain/entities/event.entity'
export default class SendSingleEvent {
  constructor(private readonly eventRepository: IEventRepository) {}

  async execute(event: EventEntity): Promise<void | null> {
    await this.eventRepository.push(event)
    return Promise.resolve(null)
  }
}
