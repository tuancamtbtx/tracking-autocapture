import { EventEntity } from '@src/domain/entities/event.entity'
export default interface IEventRepository {
  push(event: EventEntity): Promise<void>
}
