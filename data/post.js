let posts = [
	{
		id: '7',
		text: "Ok good! very cool",
		author: "1",
		createdAt: new Date().toString(),
	},
	{
		id: '6',
		text: "Please, subscribe my song",
		author: "2",
		createdAt: new Date().toString(),
	},
	{
		id: '5',
		text: "Oh really nice!",
		author: "1",
		createdAt: new Date().toString(),
	},
	{
		id: '4',
		text: "My song is very good",
		author: "2",
		createdAt: new Date().toString(),
	},
	{
		id: '3',
		text: "What is the pen?",
		author: "2",
		createdAt: new Date().toString(),
	},
	{
		id: '2',
		text: "hello I'm cuco.",
		author: "2",
		createdAt: new Date().toString(),
	},
	{
		id: '1',
		text: "hi I don't know who am i.",
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

	console.log(exist);
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