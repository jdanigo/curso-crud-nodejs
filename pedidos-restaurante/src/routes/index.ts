import express from 'express';
import usersRoutes from './usuarios'
import githubRoutes from './github'
import authRoutes from './auth'

const router = express.Router();

// /api
router.use("/usuarios", usersRoutes);
router.use("/github", githubRoutes);
router.use("/auth", authRoutes);


export default router;