import fs from 'fs'
import path from 'path'

import { projects } from './cv.type'

const getProjectsService = () => {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'services', 'cv', 'v1', 'data.json')).toString()).projects as projects
}

export {
  getProjectsService
}

