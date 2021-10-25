import express from 'express';
import 'express-async-errors';
import * as postController from '../controller/post.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', isAuth, postController.getPosts);
router.post('/', isAuth, postController.createPost);
router.put('/:id', isAuth, postController.updatePost);
router.delete('/:id', isAuth, postController.deletePost);

export default router;