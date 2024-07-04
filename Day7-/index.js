import express from "express"
import dotenv from "dotenv"
import db from "./db.js"
import { register } from "./controllers/register.js"
import { login } from "./controllers/login.js"
const app = express()
dotenv.config()
app.use(express.json())
app.use("/api", register)
app.use("/api", login)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`);
})

