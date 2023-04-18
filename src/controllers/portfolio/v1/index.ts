import express, { Router } from 'express'

import { getPageInfo } from './pageInfo'
import { getSkills } from './skills'
import { getSocial } from './social'
import { getExperiences } from './experiences'
import { getProjects } from './projects'

const routerV1: Router = Router()

routerV1.get('/pageInfo', getPageInfo)
routerV1.get('/skills', getSkills)
routerV1.get('/social', getSocial)
routerV1.get('/experiences', getExperiences)
routerV1.get('/projects', getProjects)

export {
  routerV1
}
