/**
 *   /api/v1/portfolio
 */

import { Router } from 'express'

// Middlewares

// Validators

// Controllers
import { getPageInfo, getSkills, getProjects, getWorkExperience, getSocialMedia } from '../controllers/portfolio.controller.js'

// Constants

// ---------------------------------------------------

const router = Router()

router.get('/page-info', getPageInfo)
router.get('/skills', getSkills)
router.get('/projects', getProjects)
router.get('/work-experience', getWorkExperience)
router.get('/social-media', getSocialMedia)

export default router
