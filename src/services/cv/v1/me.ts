import fs from 'fs'
import path from 'path'

import { me } from './cv.type'

const getMeService = () => {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'services', 'cv', 'v1', 'data.json')).toString()).me as me
}

export {
  getMeService
}

