import db from "../db.js";

export const deleteUser = (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM users WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: "User Not Found" });

        return res.json({ message: "User deleted successfully",result });
    });
};
