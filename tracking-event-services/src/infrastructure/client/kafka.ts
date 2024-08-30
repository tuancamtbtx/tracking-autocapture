import { injectable } from 'inversify'

import { IClient } from './interface'
@injectable()
export class KafkaClient implements IClient {
  async getClient(): Promise<any> {
    return 'kafka client'
  }

  async push(): Promise<void> {
    console.log('push')
  }
}
