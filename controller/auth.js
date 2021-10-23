import * as userRepository from '../data/auth.js';

export async function signup(req, res) {
	const { userid, password, name, email } = req.body;
	const checkid = await userRepository.findByUserid(userid);
	if (checkid)
		return res.status(409).json({ message: `${userid} already exists`});
	const newbie = await userRepository.createUser({
		userid,
		password,
		name,
		email,
	});
	res.status(201).json({ name });
}

export async function login(req, res) {
	const { userid, password } = req.body;
	const user = await userRepository.findByUserid(userid);
	if (!user)
		return res.status(404).json({ message: `${userid} not found or Invalid password`});
	
}
