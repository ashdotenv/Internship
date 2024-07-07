import express from "express"
import dotenv from "dotenv"
import db from "./db.js"
import loginRoute from "./routes/login.routes.js"
import registerRoute from "./routes/register.routes.js"
import readRoute from "./routes/read.routes.js"
import cors from 'cors';
const app = express()
dotenv.config()
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api", loginRoute)
app.use("/api", registerRoute)
app.use("/api", readRoute)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`);
})

