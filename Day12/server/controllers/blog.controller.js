import db from "../db.js"

export const addblog = (req, res) => {
    const { title, content } = req.body
    if (!title || !content) {
        return res.status(400).json({ error: "Fill In all Fields Carefully" })
    }
    const sql = "insert into blogs(user_id,title,content) values(?,?,?)"
    db.query(sql, [req.user.id, title, content], (err, result) => {
        if (err) return res.status(500).json({ err: "SQL Error", err: err })
        res.status(200).json({ message: result.message })
    })

}
export const updateBlog = (req, res) => {
    const { title, content } = req.body
    const { id } = req.params
    if (id) {
        return res.status(400).json({ err: "please provive the id for blog" })
    }
    const searchsql = 'select * from blogs where id = ?'
    db.query(searchsql, [id], (err, result) => {
        if (err) return res.status(500).json({ err: "SQL Error", err: err })
        if (result.length > 0) {

        }

    })

}
export const deleteBlog = (req, res) => {
    const { id } = req.params
    const sql = "delete from blogs where id = ?"
    if (!id) {
        return res.status(400).json({ err: "blogs not found" })
    }
    db.query(sql, [id], (err, result) => {

    })

}
export const bulkBlogs = (req, res) => {
    const sql = "select * from blogs"
    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ err: "SQL Error" })
        res.status(200).json(result)
    })

}
export const singleBlog = (req, res) => {
    const { id } = req.params
    const sql = 'select * from blogs where id = ? '
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(400).json({ err: "SQL Error" })
        res.status(200).json(result)
    })
}