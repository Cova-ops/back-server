import fs from 'fs'
import path from 'path'

import { experience } from './portfolio.type'

const getExperiencesService = () => {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'services', 'portfolio', 'v1', 'data.json')).toString()).experiences as experience[]
}

export {
  getExperiencesService
}


