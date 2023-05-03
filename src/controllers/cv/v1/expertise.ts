import { Request, Response } from 'express'
import { getExpertiseService } from '../../../services/cv/v1/'

const getExpertise = (_: Request, res: Response) => {
  res.json(getExpertiseService())
}

export { getExpertise }

