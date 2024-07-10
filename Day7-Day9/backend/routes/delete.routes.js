import express from 'express'
import { deleteUser } from '../controllers/delete.js'
const router = express.Router()
router.delete("/delete/:id",deleteUser)
export default router