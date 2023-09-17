const successResponse = (
  res,
  data,
  message = 'Correct Operation',
  code = 200,
  status = 'success'
) => {
  res.status(code).json({
    status,
    message,
    meta: data
  })
}

export default { successResponse }
