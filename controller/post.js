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

}

export async function updatePost(req, res) {

}

export async function deletePost(req, res) {

}