import { Request, Response } from 'express'
import { getMediaService } from '../../../services/cv/v1'

const getMedia = (_: Request, res: Response) => {
  res.json(getMediaService())
}

export { getMedia }

