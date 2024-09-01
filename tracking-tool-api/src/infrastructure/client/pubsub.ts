import { injectable } from 'inversify'

import { IClient } from './interface'
@injectable()
export class PubSubClient implements IClient {
  async getClient(): Promise<any> {
    return 'pubsub client'
  }

  async push(): Promise<void> {
    console.log('push')
  }
}
