import express from "express";
import {
    getMatkuls, 
    getMatkulById,
    createMatkul,
    updateMatkul,
    deleteMatkul
} from "../controllers/matkulController.js";
 
const router = express.Router();
 
router.get('/matakuliah', getMatkuls);
router.get('/matakuliah/:id', getMatkulById);
router.post('/matakuliah', createMatkul);
router.patch('/matakuliah/:id', updateMatkul);
router.delete('/matakuliah/:id', deleteMatkul);
 
export default router;