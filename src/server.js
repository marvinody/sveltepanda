import * as sapper from '@sapper/server';
import compression from 'compression';
import polka from 'polka';
import sirv from 'sirv';
import db from './db';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
if (dev) {
	require('../secrets')
}

const addJsonMethod = (req, res, next) => {
	res.json = (obj) => {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(obj));
	}
	next();
}

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		addJsonMethod,
		sapper.middleware(),

	)
	.listen(PORT, async err => {
		db.sync({ force: true })
		if (err) console.log('error', err);
	});

