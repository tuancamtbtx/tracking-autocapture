import { IsString, IsNumber } from 'class-validator'

export default class EventDto {
  @IsString()
  public clientId: string

  @IsString()
  public actionName: string

  @IsNumber()
  public createdAt: number
}
