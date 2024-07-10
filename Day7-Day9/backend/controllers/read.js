import db from "../db.js";
export const read = (req, res) => {
    const sql = "select * from users"
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: "Couldn't Read Users" })
        res.status(200).json(result)
    })
}