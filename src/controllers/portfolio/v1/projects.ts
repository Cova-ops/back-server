import { Request, Response } from 'express'
import { getProjectsService } from '../../../services/portfolio/v1/projects.ts'

const getProjects = (req: Request, res: Response) => {
  res.json(getProjectsService())
}

export { getProjects }

