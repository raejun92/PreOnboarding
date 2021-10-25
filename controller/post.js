import 'express-async-errors';
import * as postRepository from '../data/post.js';

function isNumber(str) {
	for (let i = 0; i < str.length; i++)
		if (!(str[i] >= '0' && str[i] <= 9))
			return false;
	return true;
}

export async function getPosts(req, res) {
	const limit = req.query.limit;
	const offset = req.query.offset;

	if (!(limit && offset) || !(isNumber(limit) && isNumber(offset))) {
		const posts = await postRepository.getAll();
		res.status(200).json({ data: posts });
	} 
	else {
		const posts = await postRepository.getByLimitOffset(limit, offset);
		const cnt = posts.length;
		res.status(200).json({ count: cnt, data: posts });
	}
}

export async function createPost(req, res) {
	const { text } = req.body;
	const userId = req.userId;
	const post = await postRepository.create(text, userId);

	res.status(201).json({ data: post });
}

export async function updatePost(req, res) {
	const id = req.params.id;
	const text = req.body.text;
	const post = postRepository.getById(id);

	if (!post)
		return res.sendStatus(404);
	if (post.author !== req.userId)
		return res.sendStatus(403);
	const modify = await postRepository.update(id, text);
	res.status(200).json(modify);
}

export async function deletePost(req, res) {
	const id = req.params.id;
	const post = postRepository.getById(id);

	if (!post)
		return res.status(404);
	if (post.author !== req.userId)
		return res.sendStatus(403);
	await postRepository.remove(id);
	res.sendStatus(204);
}