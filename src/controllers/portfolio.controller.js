// Middleware
import { asyncMiddleware, successResponseMiddleware } from '../middlewares/index.js'

// Helpers

// Repositories
import { fetchPageInfo, fetchSkills, fetchProjects, fetchWorkExperience, fetchSocialMedia } from '../repositories/portfolio.repository.js'

// Constants
const RESOURCE = 'Portfolio'
// const RESOURCES = 'Portfolios'

// ---------------------------------------------------

export const getPageInfo = asyncMiddleware.asyncHandler(async (req, res) => {
  const pageInfo = await fetchPageInfo()
  successResponseMiddleware.successResponse(res, pageInfo, `${RESOURCE} cargado`, 200)
})

export const getSkills = asyncMiddleware.asyncHandler(async (req, res) => {
  const skills = await fetchSkills()
  successResponseMiddleware.successResponse(res, skills, `${RESOURCE} cargados`, 200)
})

export const getProjects = asyncMiddleware.asyncHandler(async (req, res) => {
  const projects = await fetchProjects()
  successResponseMiddleware.successResponse(res, projects, `${RESOURCE} cargados`, 200)
})

export const getWorkExperience = asyncMiddleware.asyncHandler(async (req, res) => {
  const workExperience = await fetchWorkExperience()
  successResponseMiddleware.successResponse(res, workExperience, `${RESOURCE} cargados`, 200)
})

export const getSocialMedia = asyncMiddleware.asyncHandler(async (req, res) => {
  const socialMedia = await fetchSocialMedia()
  successResponseMiddleware.successResponse(res, socialMedia, `${RESOURCE} cargados`, 200)
})
