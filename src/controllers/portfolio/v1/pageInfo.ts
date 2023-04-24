import { Request, Response } from 'express'
import { getPageInfoService } from '../../../services/portfolio/v1/pageInfo.ts'

const getPageInfo = (_: Request, res: Response) => {
  res.json(getPageInfoService())
}

export { getPageInfo } 
