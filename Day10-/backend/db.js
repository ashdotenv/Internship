import sql from "mysql2"
const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "todolist"
})
db.connect((err) => {
    if (err) return console.log("Db Connection Failed");
    console.log("DB Connected");
})

export default db