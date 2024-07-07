import db from "../db.js";

export const register = (req, res) => {
    const { fullName, username, email, password } = req.body
    if (!fullName || !username || !email || !password) return res.status(400).json({ error: "Enter All Details Correctly" })
    const uniqueQuery = 'select * from users where username = ? or email = ? '
    db.query(uniqueQuery, [username, email], (err, result) => {
        if (err) return res.status(500).json({ error: "Insertion Failed" })
        if (result.length > 0) return res.status(401).json({ message: "Username Or Email Already Exist" })
        const insertQuery = "insert into users(`fullName`,`username`,`email`,`password`)values(?,?,?,?)";
        db.query(insertQuery, [fullName, username, email, password], (err, result) => {
            if (err) return res.status(500).json({ error: "Insertion Failed" })
            res.status(200).json({ message: "User Registerd Successfully", result })
        })
    })
}