import * as sapper from '@sapper/server';
import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import sirv from 'sirv';
import db from './db';

const { PORT, NODE_ENV, SEED } = process.env;
const dev = NODE_ENV === 'development';
const force = SEED !== undefined
if (dev) {
	require('../secrets')
}

express() // You can also use Express
	.use(
		bodyParser.json(),
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware(),

	)
	.listen(PORT, async err => {
		if (err) console.log('error', err);
		db.sync({ force })
	});

