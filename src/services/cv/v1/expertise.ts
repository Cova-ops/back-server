import fs from 'fs'
import path from 'path'

import { expertise } from './cv.type'

const getExpertiseService = () => {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'services', 'cv', 'v1', 'data.json')).toString()).expertise as expertise
}

export {
  getExpertiseService
}

