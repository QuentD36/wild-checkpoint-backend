import { DataSource } from "typeorm"
import { Country } from "../entities/Country"

// export const AppDataSource = new DataSource({
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "root",
//     password: "",
//     database: "wild-checkpoint-backend",
//     synchronize: true,
//     logging: false,
//     entities: [Country],
// })

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./database.db",
    synchronize: true,
    logging: false,
    entities: [Country],
})