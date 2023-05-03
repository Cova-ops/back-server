import { Request, Response } from 'express'
import { getLanguagesService } from '../../../services/cv/v1'

const getLanguages = (_: Request, res: Response) => {
  res.json(getLanguagesService())
}

export { getLanguages }

