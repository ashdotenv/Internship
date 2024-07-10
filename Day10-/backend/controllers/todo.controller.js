import db from "../db.js"

export const getTodos = (req, res) => {
    const sql = "select * from todos"
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: "Sql Error" })
        res.status(200).send(result)
    })
}

export const getTodo = (req, res) => {
    const sql = "select * from todos where id = ?"
    const { id } = req.params
    if (!id) {
        return res.status(500).json({ error: "Provide Todo Id" })
    }
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: "Sql Error" })
        res.status(200).json(result)
    })
}
export const createTodo = (req, res) => {
    const { title, content } = req.body
    if (!title || !content) {
        return res.status(400).json({ error: "Enter title and Content Correctly" })
    }
    const sql = "INSERT INTO todos (title, content) VALUES (?, ?)"
    db.query(sql, [title, content], (err, result) => {
        if (err) return res.status(500).json({ error: "Sql Error" })
        return res.status(200).json({ message: "Todo Inserted Successfully" })
    })
}
export const deleteTodo = (req, res) => {
    const { id } = req.params
    const sql = "delete from todos where id = ? "
    if (!id) {
        return res.status(500).json({ error: "Provide Todo Id" })
    }
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: "Sql Error" })
        return res.status(200).json({ message: "Todo Deleted Successfully" })

    })
}
export const updateTodo = (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!id) {
        return res.status(500).json({ error: "Provide Todo Id" });
    }
    if (!title || !content) {
        return res.status(400).json({ error: "Enter title and Content Correctly" });
    }

    const selectQuery = "SELECT * FROM todos WHERE id = ?";
    const updateQuery = "UPDATE todos SET title = ?, content = ? WHERE id = ?";

    db.query(selectQuery, [id], (err, selectResult) => {
        if (err) return res.status(500).json({ err: err.message });
        if (selectResult.length === 0) return res.status(404).json({ message: "Todo Not Found" });

        const todo = selectResult[0];
        const updatedTitle = title || todo.title;
        const updatedContent = content || todo.content;

        db.query(updateQuery, [updatedTitle, updatedContent, id], (error, updateResult) => {
            if (error) return res.status(500).json({ err: error.message });
            return res.json({ todo: { id, title: updatedTitle, content: updatedContent } });
        });
    });
};
