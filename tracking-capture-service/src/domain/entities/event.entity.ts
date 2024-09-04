import BaseEntity from '@src/domain/entities/base.entity'
export class EventEntity extends BaseEntity {
  public clientId: string
  public actionName: string
  public createdAt: number
  public eventProperties: any
  public userProperties: any
  public deviceProperties: any
  public eventType: string
  public page: string
  public referrer: string
  public platform: string
  public version: string
}
