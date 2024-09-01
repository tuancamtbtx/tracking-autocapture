import { injectable } from 'inversify'
import { EventEntity } from '@src/domain/entities/event.entity'

import { IClient } from './interface'
@injectable()
export class PubSubClient implements IClient {
  async connect(): Promise<any> {
    throw new Error('Method not implemented.')
  }
  async close(): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async push({eventId, topic}, event:EventEntity): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
