import db from "../db.js";

export const update = (req, res) => {
    const { id } = req.params;
    const { name, email, contact } = req.body;
    const selectQuery = "SELECT * FROM user WHERE id = ?";
    const updateQuery = "UPDATE user SET name = ?, email = ?, contact = ? WHERE id = ?";

    db.query(selectQuery, [id], (err, selectResult) => {
        if (err) return res.status(500).json({ err: err.message });
        if (selectResult.length === 0) return res.status(404).json({ message: "User Not Found" });
        const user = selectResult[0];
        const updatedName = name || user.name;
        const updatedEmail = email || user.email;
        const updatedContact = contact || user.contact;

        db.query(updateQuery, [updatedName, updatedEmail, updatedContact, id], (error, updateResult) => {
            if (error) return res.status(500).json({ err: error.message });
            return res.json({ user: { id, name: updatedName, email: updatedEmail, contact: updatedContact } });
        });
    });
};