import * as sapper from '@sapper/server';
import compression from 'compression';
import polka from 'polka';
import sirv from 'sirv';
import db from './db'

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
if (dev) {
	require('../secrets')
}

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});

