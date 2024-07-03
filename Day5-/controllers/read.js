import db from "../db.js"

export const read = (req, res) => {
    const sql = "select * from user"
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ err: err })
        return res.status(200).json({ message: "Data Fetched Succesfully", result: result })
    })
}