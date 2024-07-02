import express from "express"
import dotenv from "dotenv"
import db from "./db.js";
import createRouter from "./routes/create.routes.js";
const app = express()
dotenv.config()
app.use(express.json());
app.use("/api", createRouter)
const PORT = process.env.PORT || 5000
app.listen(PORT, (req, res) => {
    console.log("Serving on port 5000");
})