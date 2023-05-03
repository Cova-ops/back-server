import fs from 'fs'
import path from 'path'

import { education } from './cv.type'

const getEducationService = () => {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'services', 'cv', 'v1', 'data.json')).toString()).education as education
}

export {
  getEducationService
}

