import fs from 'fs'
import path from 'path'

import { pageInfo } from './portfolio.type'

const getPageInfoService = () => {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'services', 'portfolio', 'v1', 'data.json')).toString()).pageInfo as pageInfo
}

export {
  getPageInfoService
}
