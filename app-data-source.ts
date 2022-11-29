import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "mysql",
    host: "mysql246.umbler.com",
    port: 41890,
    username: "mvp",
    password: "X7AA9141",
    database: "mvp",
    entities: ["./src/database/entity/*.ts"],
    logging: true,
    synchronize: true
})
