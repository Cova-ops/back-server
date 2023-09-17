import { PageInfoSchema, SkillsSchema, ProjectsSchema, WorkExperienceSchema, SocialMediaSchema } from '../mongodb/models/portfolio/index.js'

export const fetchPageInfo = async () => {
  const pageInfo = await PageInfoSchema.findOne({})
  return pageInfo
}

export const fetchSkills = async () => {
  const skills = await SkillsSchema.find({})
  return skills
}

export const fetchProjects = async () => {
  const projects = await ProjectsSchema.find({})
  return projects
}

export const fetchWorkExperience = async () => {
  const workExperience = await WorkExperienceSchema.find({})
  return workExperience
}

export const fetchSocialMedia = async () => {
  const socialMedia = await SocialMediaSchema.find({})
  return socialMedia
}
