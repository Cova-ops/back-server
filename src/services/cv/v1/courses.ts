import fs from 'fs'
import path from 'path'

import { courses } from './cv.type'

const getCoursesService = () => {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'services', 'cv', 'v1', 'data.json')).toString()).courses as courses
}

export {
  getCoursesService
}

