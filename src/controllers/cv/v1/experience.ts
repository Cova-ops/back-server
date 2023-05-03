import { Request, Response } from 'express'
import { getExperienceService } from '../../../services/cv/v1/'

const getExperience = (_: Request, res: Response) => {
  res.json(getExperienceService())
}

export { getExperience }

