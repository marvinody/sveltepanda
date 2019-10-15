import { User } from '../../../db/';

// not sure if I need this but gonna keep it for now
// can add more stuff later
export async function get(req, res) {
  if (req.session.user) {
    const user = await User.findByPk(req.session.user)
    res.json(user)
  } else {
    res.sendStatus(404)
  }
}
