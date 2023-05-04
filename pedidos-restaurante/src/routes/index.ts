import express from 'express';
import usersRoutes from './usuarios'
import githubRoutes from './github'

const router = express.Router();

// /api
router.use("/usuarios", usersRoutes);
router.use("/github", githubRoutes);


export default router;