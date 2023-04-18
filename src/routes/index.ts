import express, { Router } from 'express'

import { routerControllers } from '../controllers'

const router: Router = express.Router()

router.use(routerControllers)

export { router }
