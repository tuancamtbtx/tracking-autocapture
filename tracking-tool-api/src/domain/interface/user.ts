import { UserEntity } from '@src/domain/entities/user.entity'
export default interface IEventRepository {
  findAll(): Promise<UserEntity[]>;
  findById(id: string): Promise<UserEntity | null>;
  create(user: UserEntity): Promise<UserEntity>;
  update(user: UserEntity): Promise<void>;
  delete(id: string): Promise<void>;
}
