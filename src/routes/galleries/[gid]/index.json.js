export function get(req, res, next) {
  res.send(`viewing: ${req.params.gid}`)
}
