import { Router } from 'express'

import { routerV1 } from './v1'

const routerCV: Router = Router()

routerCV.use('/v1', routerV1)

export {
  routerCV
}

