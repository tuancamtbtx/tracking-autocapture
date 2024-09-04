// src/infrastructure/di/container.ts
import { Container } from 'inversify'
import 'reflect-metadata'
import { IClient } from '@src/infrastructure/client/interface'
import { KafkaClient } from '@src/infrastructure/client/kafka'
import { PubSubClient } from '@src/infrastructure/client/pubsub'

import IEventRepository from '@src/domain/interface/event'
import { EventRepository } from '@src/infrastructure/repositories/event'
import SendSingleEventUseCase from '@src/use-cases/send-single-event'
const container = new Container()

const KAFKA_CLIENT_INSTANCE_NAME = 'KafkaClient'
const PUBSUB_CLIENT_INSTANCE_NAME = 'PubSubClient'
const EVENT_REPOSITORY_INSTANCE_NAME = 'EventRepository'
const SEND_SINGLE_EVENT_USE_CASE_INSTANCE_NAME = 'SendSingleEventUseCase'

container.bind<IClient>(KAFKA_CLIENT_INSTANCE_NAME).to(KafkaClient)
container.bind<IClient>(PUBSUB_CLIENT_INSTANCE_NAME).to(PubSubClient)

container.bind<IEventRepository>(EVENT_REPOSITORY_INSTANCE_NAME).toDynamicValue((context) => {
  return new EventRepository(context.container.get<IClient>(KAFKA_CLIENT_INSTANCE_NAME))
})

container.bind<SendSingleEventUseCase>(SEND_SINGLE_EVENT_USE_CASE_INSTANCE_NAME).toDynamicValue((context) => {
  return new SendSingleEventUseCase(context.container.get<IEventRepository>(EVENT_REPOSITORY_INSTANCE_NAME))
})
export default container
