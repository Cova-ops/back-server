import express, { Router } from 'express'

import { routerV1 } from './v1'

const routerPortfolio: Router = Router()

routerPortfolio.use('/v1', routerV1)

export {
  routerPortfolio
}
