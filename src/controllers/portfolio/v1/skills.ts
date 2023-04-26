import { Request, Response } from 'express'
import { getSkillsService } from '../../../services/portfolio/v1/skills'

const getSkills = (req: Request, res: Response) => {
  console.log('Estamo activo papi');

  res.json(getSkillsService())
}

export { getSkills } 
