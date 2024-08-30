import { injectable } from 'inversify'

import { IClient } from './interface'
import { EventEntity } from '@src/domain/entities/event.entity'
import loggers from '@src/utils/logger'
@injectable()
export class KafkaClient implements IClient {
  async getClient(): Promise<any> {
    return 'kafka client'
  }

  async push(event:EventEntity): Promise<void> {
    loggers.info('pushed event to kafka')
  }
}
