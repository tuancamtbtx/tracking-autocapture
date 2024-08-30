import { injectable } from 'inversify'
import { EventEntity } from '@src/domain/entities/event.entity'
import logger from '@src/utils/logger'

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
    logger.info(`processing event ${JSON.stringify(event)}`)
    this.client.push(event)
    return Promise.resolve()
  }
}
