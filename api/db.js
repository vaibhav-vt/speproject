import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "Pass_word1",
  database:"blog",
  port: 3306,
})
