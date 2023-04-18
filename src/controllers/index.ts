import express, { Router } from 'express'

import { routerPortfolio } from './portfolio'

const routerControllers: Router = Router()

routerControllers.use('/portfolio', routerPortfolio)

export {
  routerControllers
}
