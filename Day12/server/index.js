import express from "express"
import db from "./db.js"
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
import authRoute from "./routes/auth.routes.js"
import blogRoute from "./routes/blog.routes.js"
import cookieParser from "cookie-parser"
app.use(express.json())
app.use(cookieParser())
app.use(cors(
    { credentials: true, origin: ['http://localhost:5173'] }
))
app.use("/api", authRoute)
app.use("/api", blogRoute)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`);
})