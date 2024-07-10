import express from "express"
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from "../controllers/todo.controller.js"
const router = express.Router()
router.get("/todos", getTodos)
router.get("/todo/:id", getTodo)
router.post("/addTodo", createTodo)
router.delete("/delete/:id", deleteTodo)
router.patch("/edit/:id", updateTodo)
export default router