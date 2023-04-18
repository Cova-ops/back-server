import { Request, Response } from 'express'
import { getSocialService } from '../../../services/portfolio/v1/social.ts'

const getSocial = (req: Request, res: Response) => {
  res.json(getSocialService())
}

export { getSocial } 
