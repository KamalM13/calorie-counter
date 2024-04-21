
import express from 'express';
import { getUsers, addUser } from '../controller/user.controller.js';


const router = express.Router();

router.get('/', getUsers)
router.post('/add', addUser)

export default router;