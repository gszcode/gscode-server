const handleError = (err, req, res, next) => {
  res.json(err)

  next()
}

module.exports = handleError
