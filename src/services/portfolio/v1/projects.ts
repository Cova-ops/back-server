import fs from 'fs'
import path from 'path'

import { project } from './portfolio.type'

const getProjectsService = () => {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'services', 'portfolio', 'v1', 'data.json')).toString()).projects as project[]
}

export {
  getProjectsService
}

