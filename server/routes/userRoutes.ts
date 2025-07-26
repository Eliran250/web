import express from "express";
import { getAllUsers, createUser, updateUser, deleteUser, getUserById,login } from "../controllers/userControler";

const router = express.Router()


router.get('/get', getAllUsers);

router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.post('/create', createUser);

router.put('/:id', updateUser);

router.post('/login', login);


export default router;
