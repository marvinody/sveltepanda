import * as sapper from '@sapper/server';
import bodyParser from 'body-parser';
import compression from 'compression';
import ConnectSequelizeStore from 'connect-session-sequelize';
import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import sirv from 'sirv';
import db from './db';

const sequelizeStore = ConnectSequelizeStore(session.Store)
const sessionStore = new sequelizeStore({ db })

const { PORT, NODE_ENV, SEED } = process.env;
const dev = NODE_ENV === 'development';
const force = SEED !== undefined
if (dev) {
	require('../secrets')
}

express() // You can also use Express
	.use(
		morgan('dev'),
		bodyParser.json(),
		compression({ threshold: 0 }),
		session({
			secret: process.env.SESSION_SECRET || 'VERY NICE. I LIKE YOU. HI-5',
			store: sessionStore,
			resave: false,
			saveUninitialized: false
		}),
		sirv('static', { dev }),
		sapper.middleware(),

	)
	.listen(PORT, async err => {
		if (err) console.log('error', err);
		db.sync({ force })
	});

