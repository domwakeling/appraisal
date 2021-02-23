import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const postsRouter = express.Router();

// The app is set to use this router for routes starting /users ...

postsRouter.get('/', getPosts);
postsRouter.post('/', createPost);

export default postsRouter;
