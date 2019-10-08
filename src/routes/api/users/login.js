import { User } from '../../../db/';

export async function post(req, res, next) {
  try {
    const user = await User.findOne({ where: { username: req.body.username } })
    if (!user) {
      console.log('No such user found:', req.body.username)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.username)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.session.user = user.id
      res.json(user)
    }
  } catch (err) {
    console.error(err)
    next(err)
  }
}
