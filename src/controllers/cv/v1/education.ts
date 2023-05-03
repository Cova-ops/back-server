import { Request, Response } from 'express'
import { getEducationService } from '../../../services/cv/v1/'

const getEducation = (_: Request, res: Response) => {
  res.json(getEducationService())
}

export { getEducation }

