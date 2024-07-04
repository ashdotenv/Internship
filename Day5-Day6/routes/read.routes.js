import express from "express"
import { read } from "../controllers/read.js"
const router = express.Router()
router.get("/read", read)
export default router