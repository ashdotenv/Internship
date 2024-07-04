import sql from "mysql2"
const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "registerlogin"
})
db.connect((err) => {
    if (err) return console.log("Db Connection Failed");
    console.log("DB Connected");
})

export default db
