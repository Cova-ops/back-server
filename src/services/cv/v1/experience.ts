import fs from 'fs'
import path from 'path'

import { experience } from './cv.type'

const getExperienceService = () => {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'services', 'cv', 'v1', 'data.json')).toString()).experience as experience
}

export {
  getExperienceService
}

