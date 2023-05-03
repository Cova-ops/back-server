import fs from 'fs'
import path from 'path'

import { media } from './cv.type'

const getMediaService = () => {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'services', 'cv', 'v1', 'data.json')).toString()).media as media
}

export {
  getMediaService
}

