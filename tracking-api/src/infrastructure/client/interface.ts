import BaseEntity from '@src/domain/entities/base.entity'
export interface IClient {
  getClient(): Promise<any>
  push(event: BaseEntity): Promise<void>
}
