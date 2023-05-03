import fs from 'fs'
import path from 'path'

import { skills } from './cv.type'

const getSkillsService = () => {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'services', 'cv', 'v1', 'data.json')).toString()).skills as skills
}

export {
  getSkillsService
}

