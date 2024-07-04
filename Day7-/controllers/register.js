import db from "../db.js";

export const register = (req, res) => {
    console.log("Register Controller");
    const { fullName, username, email, password } = req.body
    if (!fullName || !username || !email || !password) return res.status(400).json({ error: "Enter All Details Correctly" })
    const sql = "insert into users(`fullName`,`username`,`email`,`password`)values(?,?,?,?)";
    db.query(sql, [fullName, username, email, password], (err, result) => {
        if (err) return res.status(500).json({ error: "Insertion Failed" })
        res.json({ message: "Hello world", result })
    })

}