import express from "express";
import {
    getTodos, 
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
} from "../controllers/TodoController.js";
 
const router = express.Router();
 
router.get('/kelas', getTodos);
router.get('/kelas/:id', getTodoById);
router.post('/kelas', createTodo);
router.patch('/kelas/:id', updateTodo);
router.delete('/kelas/:id', deleteTodo);
 
export default router;