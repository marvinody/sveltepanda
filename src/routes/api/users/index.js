import { User } from '../../../db/';

export async function get(req, res) {
  const users = await User.findAll();
  res.json(users)
}

export async function post(req, res, next) {
  try {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email || null
    })
    req.session.user = user.id;
    res.json(user)
  } catch (err) {
    console.log("NEXTING")
    console.log(next)
    next(err)
  }
}
