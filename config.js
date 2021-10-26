import env from 'dotenv';

env.config();

function required(key, defaultValue = undefined) {
	const value = process.env[key] || defaultValue;
	
	if (value == null)
		throw new Error('key is undefined');
	return value;
}

export const config = {
	jwt: {
		secretKey: required("JWT_SECRET"),
		exPiresIn: required("JWT_EXPIRESIN", "1d"),
	},
	bcrypt: {
		saltRounds: parseInt(required("BCRYPT_SALT_ROUNDS", 11)),
	},
	host: {
		port: parseInt(required("HOST_PORT", 3000)),
	},
};