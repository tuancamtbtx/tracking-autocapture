import { Table, Column, Model, DataType } from "sequelize-typescript";
import {UserEntity} from "@src/domain/entities/user.entity";

@Table({
  tableName: "finops_users",
  timestamps: true,
})
export class UserModel extends Model<UserEntity> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  fullname: string;
}
