let posts = [
	{
		id: '10',
		text: "hello world",
		author: "1",
		createdAt: new Date().toString(),
	},
	{
		id: '9',
		text: "hello world",
		author: "1",
		createdAt: new Date().toString(),
	},
	{
		id: '8',
		text: "hello world",
		author: "1",
		createdAt: new Date().toString(),
	},
	{
		id: '7',
		text: "hello world",
		author: "1",
		createdAt: new Date().toString(),
	},
	{
		id: '6',
		text: "hello world",
		author: "1",
		createdAt: new Date().toString(),
	},
	{
		id: '5',
		text: "hello world",
		author: "1",
		createdAt: new Date().toString(),
	},
	{
		id: '4',
		text: "hello world",
		author: "1",
		createdAt: new Date().toString(),
	},
	{
		id: '3',
		text: "hello world",
		author: "1",
		createdAt: new Date().toString(),
	},
	{
		id: '2',
		text: "hello world",
		author: "1",
		createdAt: new Date().toString(),
	},
	{
		id: '1',
		text: "hello world",
		author: "1",
		createdAt: new Date().toString(),
	},
];

export async function getAll() {
	return Promise.all(posts);
}

export async function getByLimitOffset(limit, offset) {
	const endPoint = posts.length - offset + 1;
	
	if (endPoint <= limit) {
		return getAll().then(data => data.slice(0, endPoint));
	} else {
		return getAll().then(data => data.slice(endPoint - limit, endPoint));
	}
}

export async function getById(id) {
	const exist = posts.find(post => post.id === id);

	if (!exist)
		return null;
	return exist;
}

export async function create(text, userId) {
	const post = {
		id: String(posts.length + 1),
		text,
		author: userId,
		createAt: new Date(),
	};
	posts = [post, ...posts];
	return post;
}

export async function update(id, text) {
	const post = posts.find(post => post.id === id);

	if (post)
		post.text = text;
	return post;
}

export async function remove(id) {
	posts = posts.filter(post => post.id !== id);
}