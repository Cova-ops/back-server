// Middleware
import { asyncMiddleware, successResponseMiddleware } from '../middlewares/index.js'

// Helpers

// Repositories
import { fetchPageInfo } from '../repositories/portfolio.repository.js'

// Constants
const RESOURCE = 'Portfolio'
const RESOURCES = 'Portfolios'

// ---------------------------------------------------

export const getPageInfo = asyncMiddleware.asyncHandler(async (req, res) => {
  const pageInfo = await fetchPageInfo()
  successResponseMiddleware.successResponse(res, pageInfo, `${RESOURCE} cargado`, 200)
})
