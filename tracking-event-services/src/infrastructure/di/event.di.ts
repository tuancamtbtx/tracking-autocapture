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

container.bind<IClient>('KafkaClient').to(KafkaClient)
container.bind<IClient>('PubSubClient').to(PubSubClient)

container.bind<IEventRepository>('EventRepository').toDynamicValue((context) => {
    return new EventRepository(context.container.get<IClient>('KafkaClient'))
  })

container.bind<SendSingleEventUseCase>('SendSingleEventUseCase').toDynamicValue((context) => {
  return new SendSingleEventUseCase(context.container.get<IEventRepository>('EventRepository'))
})
export default container
