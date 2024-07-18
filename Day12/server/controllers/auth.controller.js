import db from "../db.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const register = (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) return res.status(400).json({ error: "Enter All Details Correctly" })
    const uniqueQuery = 'select * from users where username = ? or email = ? '
    db.query(uniqueQuery, [username, email], async (err, result) => {
        if (err) return res.status(500).json({ error: "DB Failed" })
        if (result.length > 0) return res.status(401).json({ message: "Username Or Email Already Exist" })
        const insertQuery = "insert into users(`username`,`email`,`password`)values(?,?,?)";
        const hashedPassword = await bcrypt.hash(password, 10)
        db.query(insertQuery, [username, email, hashedPassword], (err, result) => {
            if (err) return res.status(500).json({ error: "Insertion Failed" })
            res.status(200).json({ message: "User Registerd Successfully", result })
        })
    })
}
export const login = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "Enter Details Carefully" });
    }

    const sql = "SELECT * FROM users WHERE username = ?";
    db.query(sql, [username], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ error: "Username or Password Didn't Match" });

        const user = result[0];
        const hashedPassword = user.password;

        bcrypt.compare(password, hashedPassword, (err, isMatch) => {
            if (err) return res.status(500).json({ error: err.message });
            if (!isMatch) return res.status(404).json({ error: "Username or Password Didn't Match" });
            const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).cookie("token", token, { maxAge: 24 * 60 * 60 * 1000 }).json({ message: "Logged In Suceessfully" });
        });
    });


}