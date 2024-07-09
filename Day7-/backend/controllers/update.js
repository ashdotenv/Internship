import db from "../db.js"
export const update = (req, res) => {
    const { id } = req.params;
    const { fullName, username, email, password } = req.body;
    const selectQuery = "SELECT * FROM userS WHERE id = ?";
    const updateQuery = "UPDATE userS SET fullName = ?, username = ?, email = ?, password = ? WHERE id = ?";

    db.query(selectQuery, [id], (err, selectResult) => {
        if (err) return res.status(500).json({ err: err.message });
        if (selectResult.length === 0) return res.status(404).json({ message: "User Not Found" });
        const user = selectResult[0];
        const updatedFullName = fullName || user.fullName;
        const updatedUsername = username || user.username;
        const updatedEmail = email || user.email;
        const updatedPassword = password || user.password;

        db.query(updateQuery, [updatedFullName, updatedUsername, updatedEmail, updatedPassword, id], (error, updateResult) => {
            if (error) return res.status(500).json({ err: error.message });
            return res.json({ user: { id, fullName: updatedFullName, username: updatedUsername, email: updatedEmail, password: updatedPassword } });
        });
    });
};
