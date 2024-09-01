import BaseEntity from '@src/domain/entities/base.entity'
export default interface UseCaseInterface {
  execute(): Promise<BaseEntity | BaseEntity[] | string | number | boolean>
}
