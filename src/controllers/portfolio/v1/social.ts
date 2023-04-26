import { Request, Response } from 'express'
import { getSocialService } from '../../../services/portfolio/v1/social'

const getSocial = (req: Request, res: Response) => {
  res.json(getSocialService())
}

export { getSocial } 
