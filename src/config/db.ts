import { DataSource } from "typeorm";
import { Country } from "../entities/Country";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db.sqlite",
  synchronize: true,
  logging: false,
  entities: [Country],
});