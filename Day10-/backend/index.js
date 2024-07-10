import express from "express"
import todoRoute from "./routes/todo.routes.js"
import dotenv from "dotenv"
dotenv.config({})
import db from "./db.js"
import cors from "cors"
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(cors());
app.use("/api", todoRoute)
app.listen(PORT, () => {
    console.log(`Serving on PORT`, PORT);
})
