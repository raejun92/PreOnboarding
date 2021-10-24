import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'express-async-errors';
import * as userRepository from '../data/auth.js';

const bcryptSaltRounds = 10;
const jwtSecretKey = "BCvWhjK*TX&5Z@ut4eIVy@M0pd5Do^OV";
const jwtExpiresIn = "1d";

function createJwtToken(user) {
	return jwt.sign({ user }, jwtSecretKey, {expiresIn: jwtExpiresIn});
}

export async function signup(req, res) {
	const { userid, password, name, email } = req.body;
	const checkId = await userRepository.findByUserid(userid);
	if (checkId)
		return res.status(409).json({ message: `${userid} already exists`});
	const hashed = await bcrypt.hash(password, bcryptSaltRounds);
	const newbie = await userRepository.createUser({
		userid,
		password: hashed,
		name,
		email,
	});
	const token = createJwtToken(newbie);
	res.status(201).json({ token, userid });
}

export async function login(req, res) {
	const { userid, password } = req.body;
	const user = await userRepository.findByUserid(userid);
	if (!user)
		return res.status(404).json({ message: `${userid} not found or Invalid password`});
	const validPassword = await bcrypt.compare(password, user.password);
	if (!validPassword)
		return res.status(401).json({ message: `${userid} not found or Invalid password`});
	const token = createJwtToken(user.id);
	res.status(200).json({ token, userid });
}
