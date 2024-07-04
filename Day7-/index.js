import express from "express"
import dotenv from "dotenv"
import db from "./db.js"
import loginRoute from "./routes/login.routes.js"
import registerRoute from "./routes/register.routes.js"
const app = express()
dotenv.config()
app.use(express.json())
app.use("/api", loginRoute)
app.use("/api", registerRoute)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`);
})

