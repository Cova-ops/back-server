import { Request, Response } from 'express'
import { getProjectsService } from '../../../services/portfolio/v1/projects'

const getProjects = (req: Request, res: Response) => {
  res.json(getProjectsService())
}

export { getProjects }

