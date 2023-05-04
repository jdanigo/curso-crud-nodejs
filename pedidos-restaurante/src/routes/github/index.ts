import express from 'express';
//Import controllers
import { sendInvite } from '../../controllers/github'
const router = express.Router();

// /api/github
router.put("/", sendInvite); // update specific user

export default router;