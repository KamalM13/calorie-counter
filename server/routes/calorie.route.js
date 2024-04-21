//models/calorie.model.js
import express from 'express';
import { getAllCalories, addCalorie, getCalorie, deleteCalorie, updateCalorie } from '../controller/calorie.controller.js';

const router = express.Router();

router.get('/', getAllCalories)
router.post('/add', addCalorie)
router.get('/:id', getCalorie)
router.delete('/:id', deleteCalorie)
router.post('/:id', updateCalorie)

export default router;
