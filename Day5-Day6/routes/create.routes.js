import express from "express"
const router = express.Router()
import { create } from "../controllers/create.js"
router.post("/create", create)
export default router