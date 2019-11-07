export async function get(req, res, next) {
  try {

    res.send(`${req.params.gid}: ${req.params.shortHash}`)
  } catch (err) {
    next(err)
  }
}
