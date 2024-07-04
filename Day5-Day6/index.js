import express from "express"
import dotenv from "dotenv"
import db from "./db.js";
import createRouter from "./routes/create.routes.js";
import readRouter from "./routes/read.routes.js";
import updateRouter from "./routes/update.routes.js";
import deleteRouter from "./routes/delete.routes.js";
const app = express()
dotenv.config()
app.use(express.json());
app.use("/api", createRouter)
app.use("/api", readRouter)
app.use("/api", updateRouter)
app.use("/api", deleteRouter)
const PORT = process.env.PORT || 5000
app.listen(PORT, (req, res) => {
    console.log("Serving on port 5000");
})