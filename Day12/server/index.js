import express from "express"
import db from "./db.js"
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
import authRoute from "./routes/auth.routes.js"
app.use(express.json())
app.use(cors())
app.use("/api", authRoute)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`);
})