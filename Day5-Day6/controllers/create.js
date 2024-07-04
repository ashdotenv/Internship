import db from "../db.js"

export const create = (req, res) => {
    const sql = "insert into user(`name`,`email`,`contact`) value (?,?,?)" // use backticks 
    const { name, email, contact } = req.body
    db.query(sql, [name, email, contact]/* prepared statement*/, (err, result) => {
        if (err) return res.status(500).json({ err: err })
        return res.status(200).json({ message: "data inserted Successfully", result: result })
    })
}
