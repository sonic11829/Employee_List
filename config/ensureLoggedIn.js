module.exports = (req, res, next) => {
  if (!req.user) return res.status(401).json({ msg: 'Unautorized user request, permission denied'})
  next()
}
