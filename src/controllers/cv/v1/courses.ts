import { Request, Response } from 'express'
import { getCoursesService } from '../../../services/cv/v1/'

const getCourses = (_: Request, res: Response) => {
  res.json(getCoursesService())
}

export { getCourses }

