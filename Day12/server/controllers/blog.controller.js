import db from "../db.js"

export const addblog = (req, res) => {
    const { title, content } = req.body
    if (!title || !content) {
        return res.status(400).json({ error: "Fill In all Fields Carefully" })
    }
    const sql = "insert into posts(user_id,title,content) values(?,?,?)"
    db.query(sql, [req.user.id, title, content], (err, result) => {
        if (err) return res.status(500).json({ err: "SQL Error", err: err })
        res.status(200).json({ message: result })
    })

}
export const updateBlog = (req, res) => {
    const { title, content } = req.body;
    const { id } = req.params;
    const userId = req.user.id;

    if (!id) {
        return res.status(400).json({ err: "Please provide the id for the blog" });
    }

    const searchsql = 'SELECT user_id FROM posts WHERE id = ?';
    db.query(searchsql, [id], (err, result) => {
        if (err) return res.status(500).json({ err: "SQL Error", err: err });

        if (result.length === 0) {
            return res.status(404).json({ err: "Blog not found" });
        }

        const postUserId = result[0].user_id;

        if (postUserId !== userId) {
            return res.status(403).json({ err: "Unauthorized" });
        }

        const updatesql = 'UPDATE posts SET title = ?, content = ? WHERE id = ?';
        db.query(updatesql, [title, content, id], (err, result) => {
            if (err) return res.status(500).json({ err: "SQL Error", err: err });

            return res.status(200).json({ message: "Blog updated successfully" });
        });
    });
};

export const deleteBlog = (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    if (!id) {
        return res.status(400).json({ err: "Blog not found" });
    }

    const sqlSelect = "SELECT user_id FROM posts WHERE id = ?";
    db.query(sqlSelect, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ err: "Database error" });
        }
        if (results.length === 0) {
            return res.status(404).json({ err: "Blog not found" });
        }
        const postUserId = results[0].user_id;
        if (postUserId !== userId) {
            return res.status(403).json({ err: "Unauthorized" });
        }
        const sqlDelete = "DELETE FROM posts WHERE id = ?";
        db.query(sqlDelete, [id], (err, result) => {
            if (err) {
                return res.status(500).json({ err: "Database error" });
            }
            return res.status(200).json({ message: "Blog deleted successfully" });
        });
    });
};

export const bulkBlogs = (req, res) => {
    const sql = "select * from posts"
    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ err: "SQL Error" })
        res.status(200).json(result)
    })

}
export const singleBlog = (req, res) => {
    const { id } = req.params
    const sql = 'select * from  posts where id = ? '
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(400).json({ err: "SQL Error" })
        res.status(200).json(result)
    })
}