let users = [
	{
		id: '1',
		userid: 'userid',
		password: '$2b$10$Xk9YSlElEPkvdebEneZmheaOG5HeyqJXprjmwTZySPJTrOZfCcJj.',
		name: 'minsu',
		email: 'minsu@google.com',
	},
];

export async function findByUserid(userid) {
	return users.find(user => user.userid === userid);
}

export async function createUser(user) {
	const newbie = { id: String(users.length + 1), ...user };
	users.push(newbie);
	return newbie.id;
}