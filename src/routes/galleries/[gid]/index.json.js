export function get(req, res, next) {
  try {
    const gid = req.params.gid
    res.json({ gid })
  } catch (err) {
    next(err)
  }
}
