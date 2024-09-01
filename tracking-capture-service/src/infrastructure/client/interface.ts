import BaseEntity from '@src/domain/entities/base.entity'
export interface IClient {
  connect(): Promise<any>
  close(): Promise<void>
  push({eventId, topic},event: BaseEntity): Promise<void>
}
