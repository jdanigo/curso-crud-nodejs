import express from 'express';
import usersRoutes from './usuarios'
import githubRoutes from './github'
import authRoutes from './auth'

import addressRoutes from './address'
import categoriesRoutes from './categories'
import customersRoutes from './customers'
import productsRoutes from './products'
import tablesRoutes from './tables'
import ordersRoutes from './orders'

const router = express.Router();

// /api
router.use("/usuarios", usersRoutes);
router.use("/github", githubRoutes);
router.use("/auth", authRoutes);

router.use("/address", addressRoutes);
router.use("/categories", categoriesRoutes);
router.use("/customers", customersRoutes);
router.use("/products", productsRoutes);
router.use("/tables", tablesRoutes);
router.use("/orders", ordersRoutes);



export default router;