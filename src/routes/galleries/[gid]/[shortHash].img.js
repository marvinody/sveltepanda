export async function get(req, res, next) {
  try {
    const gid = req.params.gid, shortHash = req.params.shortHash
    res.json({ gid, shortHash })
  } catch (err) {
    next(err)
  }
}
