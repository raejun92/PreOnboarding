import express from 'express';
import 'express-async-errors';
import * as postController from '../controller/post.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

router.get('/',  postController.getPosts);
router.post('/',  postController.createPost);
router.put('/:id',  postController.updatePost);
router.delete('/:id', postController.deletePost);

export default router;