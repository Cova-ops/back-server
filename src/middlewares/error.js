const errorHandler = (err, req, res, next) => {
  const error = { ...err }

  error.message = err.message

  // Log to console for dev
  console.log('err :>> ', err)

  res.status(error.statusCode || 500).json({
    status: 'error',
    message: error.message || 'Server Error'
  })
}

export default {
  errorHandler
}
