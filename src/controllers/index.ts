import { Router } from 'express'

import { routerPortfolio } from './portfolio'
import { routerCV } from './cv'

const routerControllers: Router = Router()

routerControllers.use('/portfolio', routerPortfolio)
routerControllers.use('/cv', routerCV)

export {
  routerControllers
}

