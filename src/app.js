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

const { NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
if (dev) {
  require('../secrets')
}

const app = express()
app.use(morgan('dev')) // logger

// gonna need to add multer later
app.use(bodyParser.json())

app.use(compression({ threshold: 0 }))

app.use(session({
  secret: process.env.SESSION_SECRET || 'VERY NICE. I LIKE YOU. HI-5',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}))

app.use(sirv('static', { dev }))

// load session for any page component to see
app.use(sapper.middleware({
  session: (req, res) => ({
    user: req.session.user
  })
}))

app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

export default app
