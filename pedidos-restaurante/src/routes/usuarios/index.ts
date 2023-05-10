import express from 'express';
//Import controllers
import { getAllUsers, getAllUsersById, createNewUsers, updateUsers, deleteUsers } from '../../controllers/usuarios'
import authMiddleware from '../../middleware/auth';
const router = express.Router();

// /api/usuarios
router.get("/", [authMiddleware, getAllUsers]); // get all users
router.get("/:id", getAllUsersById); // get user by id
router.post("/", createNewUsers); // create new users
router.put("/:id", updateUsers); // update specific user
router.delete("/:id", deleteUsers); //delete specific user

export default router;