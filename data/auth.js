let users = [
	{
		id: '1',
		userid: 'userid',
		password: '$2b$10$Xk9YSlElEPkvdebEneZmheaOG5HeyqJXprjmwTZySPJTrOZfCcJj.',
		name: 'minsu',
		email: 'minsu@naver.com',
	},
	{
		id: '2',
		userid: 'cuco123',
		password: '$2b$10$0zLFv3Q7ki79fx4TTi8HR.0QkuJelF8zaUHYF7uoRix6fEOp5ES2i',
		name: 'cuco',
		email: 'cuco@gmail.com',
	},
];

export async function findByUserid(userid) {
	return users.find(user => user.userid === userid);
}

export async function findById(id) {
	return users.find(user => user.id === id);
}

export async function createUser(user) {
	const newbie = { id: String(users.length + 1), ...user };
	users.push(newbie);
	return newbie.id;
}