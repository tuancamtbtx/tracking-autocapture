import { injectable } from 'inversify'
import { EventEntity } from '@src/domain/entities/event.entity'

import IEventRepository from '@src/domain/interface/event'

@injectable()
export class EventRepository implements IEventRepository {
  constructor() {
    console.log('EventRepository constructor')
  }
  push(event: EventEntity): Promise<void> {
    console.log('EventRepository save')
    return Promise.resolve()
  }
}
