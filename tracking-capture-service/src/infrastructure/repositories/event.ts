import { injectable } from 'inversify'
import { EventEntity } from '@src/domain/entities/event.entity'
import logger from '@src/utils/logger'
import {v4 as uuidv4} from 'uuid';

import IEventRepository from '@src/domain/interface/event'
import {IClient} from '@src/infrastructure/client/interface'
@injectable()
export class EventRepository implements IEventRepository {
  constructor(
    private readonly client: IClient
  ) {
    console.log('EventRepository constructor')
  }
  push(event: EventEntity): Promise<void> {
    let eventId = uuidv4()
    logger.info(`processing event ${eventId} - action: ${event.actionName}`)
    this.client.push( {eventId: eventId, topic: 'tracking-event'}, event)
    return Promise.resolve()
  }
}
