import { Request, Response } from 'express'
import { getExperiencesService } from '../../../services/portfolio/v1/experiences.ts'

const getExperiences = (req: Request, res: Response) => {
  res.json(getExperiencesService())
}

export { getExperiences }


