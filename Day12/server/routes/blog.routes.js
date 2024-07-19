import express from 'express'
import { addblog, bulkBlogs, deleteBlog, singleBlog, updateBlog } from '../controllers/blog.controller.js'
import { verifyToken } from '../middlewares/verifyToken.js'
const router = express.Router()
router.get("/blogs/bulk", bulkBlogs)
router.get("/blog/:id", singleBlog)
router.post("/add", verifyToken, addblog)
router.patch("/update/:id", verifyToken, updateBlog)
router.delete("/delete/:id", verifyToken, deleteBlog)
export default router