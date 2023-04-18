import fs from 'fs'
import path from 'path'

import { skill } from './portfolio.type.ts'

const getSkillsService = () => {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'services', 'portfolio', 'v1', 'data.json')).toString()).skills as skill[]
}

export {
  getSkillsService
}

