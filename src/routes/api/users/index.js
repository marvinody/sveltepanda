import { User } from '../../../db/';

export async function get(req, res) {
  const users = await User.findAll();
  res.json(users)
}
