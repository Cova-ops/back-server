import { Request, Response } from 'express'
import { getSkillsService } from '../../../services/cv/v1'

const getSkills = (_: Request, res: Response) => {
  res.json(getSkillsService())
}

export { getSkills }

