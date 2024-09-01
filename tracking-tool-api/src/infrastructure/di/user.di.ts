// // src/infrastructure/di/container.ts
import { Container } from 'inversify'
import 'reflect-metadata'

import IUserRepository from '@src/domain/interface/user'
import { UserRepository } from '@src/infrastructure/repositories/user.repo'
const container = new Container();

container.bind<IUserRepository>("IBillingRepository").to(UserRepository);

export default container