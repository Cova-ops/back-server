import fs from 'fs'
import path from 'path'

import { social } from './portfolio.type'

const getSocialService = () => {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'services', 'portfolio', 'v1', 'data.json')).toString()).social as social
}

export {
  getSocialService
}

