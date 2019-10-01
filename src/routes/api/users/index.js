import { User } from '../../../db/';

export async function get(req, res) {
  const users = await User.findAll();
  res.json(users)
}

export async function post(req, res) {
  try {
    const user = await User.create(req.body)
    res.json(user)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}
