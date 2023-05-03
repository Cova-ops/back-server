import { Request, Response } from 'express'
import { getMeService } from '../../../services/cv/v1/'

const getMe = (_: Request, res: Response) => {
  res.json(getMeService())
}

export { getMe }

