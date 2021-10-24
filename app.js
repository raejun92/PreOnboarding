import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import 'express-async-errors';
import authRouter from './router/auth.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

app.use('/auth', authRouter);
// app.use('/posts', postRouter);

app.use((req, res, next) => {
	res.sendStatus(404);
});

app.use((error, req, res, next) => {
	console.error(error);
	res.sendStatus(500);
});

app.listen(3000);