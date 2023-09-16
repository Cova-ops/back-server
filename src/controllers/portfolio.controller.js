// Middleware
import { asyncMiddleware, successResponseMiddleware } from '../middlewares'

// Helpers

// Repositories
import { fetchPageInfo } from '../repositories/portfolio.repository'

// Constants
const RESOURCE = 'Portfolio'
const RESOURCES = 'Portfolios'

// ---------------------------------------------------

export const getPageInfo = asyncMiddleware.asyncHandler(async (req, res) => {
  const pageInfo = await fetchPageInfo()
  successResponseMiddleware.successResponse(res, pageInfo, `${RESOURCE} cargado`, 200)
})
