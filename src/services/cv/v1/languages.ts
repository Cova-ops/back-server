import fs from 'fs'
import path from 'path'

import { languages } from './cv.type'

const getLanguagesService = () => {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'services', 'cv', 'v1', 'data.json')).toString()).languages as languages
}

export {
  getLanguagesService
}

