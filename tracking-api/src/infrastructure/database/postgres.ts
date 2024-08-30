// sequelize.ts
import { Sequelize } from "sequelize-typescript";
import { UserModel } from "@src/infrastructure/models/user.model";
import DBConfig from "@src/configs/db.config";

const sequelize = new Sequelize({
  database: DBConfig.DB,
  dialect: "postgres",
  username: DBConfig.USER,
  password: DBConfig.PASSWORD,
  host: DBConfig.HOST,
  models: [UserModel], // Add more models as needed
});

export default sequelize;
