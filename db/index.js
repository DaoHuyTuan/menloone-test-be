import pg from "pg-promise"
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const db_host = process.env.DB_HOST
const db_port = process.env.DB_PORT
const db_name = process.env.DB_NAME

const db = pg(`postgres://${username}:${password}@${db_host}:${db_port}/${db_name}`)