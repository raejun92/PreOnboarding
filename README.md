# PreOnboarding

## 구현한 방법과 이유에 대한 간단한 내용
- 

## 자세한 실행 방법(endpoint 호출방법)
|매소드|URI|설명(endpoint)|
|:---:|:----:|:---:|
|get|http://localhost:3000/auth/login|로그인|
|post|http://localhost:3000/auth/signup|회원가입|
|get|http://localhost:3000/posts|모든 게시글 목록|
|get|http://localhost:3000/posts?limit=30&offset=0|0번 포스터부터 최대 30개 게시글 목록|
|post|http://localhost:3000/posts|게시글 작성|
|put|http://localhost:3000/posts/id|게시글 변경|
|delete|http://localhost:3000/posts/id|게시글 삭제|

<!--
라우터를 auth와 posts로 나누면 되겠다
auth는 signup, login 있으면 될 듯
posts는 /, /:id, 
 -->
-----------------------------------------
## api 명세(request/response 서술 필요)
## ***회원***
### User Schema
```
{
	id: string,
	userid: string,
	password: string,
	name: string,
	email: string,
}
```

### GET /auth/login
- Request
```
{
	userid,
	password
}
```
- Response
```
{
	token,
	name
}
```

### POST /auth/signup
- Request
```
{
	userid,
	password,
	name,
	email
}
```
- Response
```
{
	token,
	name
}
```

## ***게시글***
### Post Schema
```
{
	id: string,
	text: string,
	author: string,
	created_at: string
}
```

### GET /posts
- Response
```
{
	[post ...]
}
```

### GET /posts?limit=:limit&offset=:offset
- Response
```
{
	count,
	[post ...]
}
```

### POST /posts
- Request
```
{
	text,
	author
}
```

- Response
```
{
	post
}
```

### PUT /posts/:id
- Request
```
{
	text
}
```

- Response
```
{
	post
}
```

### DELETE /posts/:id
- Response
```
{
	msg(success)
}
```