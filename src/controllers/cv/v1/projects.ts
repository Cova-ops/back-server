import { Request, Response } from 'express'
import { getProjectsService } from '../../../services/cv/v1'

const getProjects = (_: Request, res: Response) => {
  res.json(getProjectsService())
}

export { getProjects }

