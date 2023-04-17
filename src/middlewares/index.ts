import express, { Request, Response, NextFunction } from 'express'
import logger from '../utils/logger'

const middlewaresRouter = express.Router()

middlewaresRouter.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err)
  res.status(500).json({ message: err.message, status: 500 })
  return
})

export default middlewaresRouter 
