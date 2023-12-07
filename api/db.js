import mysql from "mysql"

export const db = mysql.createConnection({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "Pass_word1",
  database: process.env.MYSQL_DATABASE || "blog",
  port: 3306,
})
