import express from 'express';
//Import controllers
import { createMethod, updateMethod, getByIdMethod, getMethod, deleteMethod } from '../../controllers/tables'
import authMiddleware from '../../middleware/auth';
const router = express.Router();

// /api/tables
router.get("/", [authMiddleware, getMethod]); 
router.get("/:id", [authMiddleware, getByIdMethod]); 
router.post("/", [authMiddleware, createMethod]); 
router.put("/:id", [authMiddleware, updateMethod]); 
router.delete("/:id", [authMiddleware, deleteMethod]); 

export default router;