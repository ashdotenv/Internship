import db from "../db.js";

export const login = (req, res) => {
    console.log("Login Controller");
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(500).json({ eror: "Enter Details Carefully" })
    }
    const sql = "select * from users where username = ? and password = ?"
    db.query(sql, [username, password], (err, result) => {
        if (err) return res.status(500).json({ error: err.message })
        if (result.length === 0) return res.status(404).json({ error: "Username or Password Didn't Matched" })
        res.status(200).json({ message: "Login Successful" })
    })
}