import { Router } from 'express'

import { getCourses } from './courses'
import { getEducation } from './education'
import { getExperience } from './experience'
import { getExpertise } from './expertise'
import { getLanguages } from './languages'
import { getMe } from './me'
import { getMedia } from './media'
import { getSkills } from './skills'
import { getProjects } from './projects'

const routerV1: Router = Router()

routerV1.get('/courses', getCourses)
routerV1.get('/education', getEducation)
routerV1.get('/experience', getExperience)
routerV1.get('/expertise', getExpertise)
routerV1.get('/languages', getLanguages)
routerV1.get('/me', getMe)
routerV1.get('/media', getMedia)
routerV1.get('/skills', getSkills)
routerV1.get('/projects', getProjects)

export {
  routerV1
}

