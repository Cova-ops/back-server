/**
 *   /api/v1/portfolio
 */

import { Router } from 'express'

// Middlewares

// Validators

// Controllers
import { getPageInfo } from '../controllers/portfolio.controller.js'

// Constants

// ---------------------------------------------------

const router = Router()

router.get('/page-info', getPageInfo)

export default router
