import express from 'express';
import { getUsers, createUser } from '../controllers/users.js';

const usersRouter = express.Router();

// The app is set to use this router for routes starting /users ...

usersRouter.get('/', getUsers);
usersRouter.post('/', createUser);

export default usersRouter;
