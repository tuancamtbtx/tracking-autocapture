import { injectable } from 'inversify'
import { UserEntity } from '@src/domain/entities/user.entity'

import IUserRepository from '@src/domain/interface/user'
@injectable()
export class UserRepository implements IUserRepository {
  constructor(
  ) {
  }
  async findAll(): Promise<UserEntity[]> {
    throw new Error("Method not implemented.");

  }
  async findById(id: string): Promise<UserEntity | null> {
    throw new Error("Method not implemented.");
  }
  async create(user: UserEntity): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  async update(user: UserEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
 
}
