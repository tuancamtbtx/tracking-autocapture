import { injectable } from 'inversify'
import { Kafka, KafkaConfig,Producer } from 'kafkajs';

import { IClient } from './interface'
import { EventEntity } from '@src/domain/entities/event.entity'
import loggers from '@src/utils/logger'
@injectable()
export class KafkaClient implements IClient {
  producer: Producer = null
  constructor() {
    loggers.info('Init KafkaClient Constructor')
    const kafkaConfig: KafkaConfig = { brokers: ['localhost:9092'] }
    const kafka = new Kafka(kafkaConfig)
    const producer = kafka.producer()
    this.producer = producer
  }
  async connect(): Promise<any> {
    return await this.producer.connect().catch(e => loggers.error(`Can't connect ${e}`));

  }
  async close(): Promise<void> {
    await this.producer.disconnect().catch(e => loggers.error(`Error on disconnect ${e}`));
  }

  async push({eventId, topic},event:EventEntity): Promise<void> {
    await this.connect()
    this.producer.send({
      topic: topic,
      messages: [
        { key: eventId,value: JSON.stringify(event) }],
    })
    loggers.info(`pushed event id ${eventId} to kafka`)
  }
}
