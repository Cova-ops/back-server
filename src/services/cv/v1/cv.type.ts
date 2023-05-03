type Link = string

export type me = {
  _type: "me"
  name: string
  role: string
  summary: string
  imageLink: Link
}

export type media = {
  _type: "media"
  email: string
  location: string
  textLinkedIn: string
  linkLinkedIn: string
  phone: string
  textGithub: string
  linkGithub: string
  textPortfolio: string
  linkPortfolio: string
}

export type expertise = string[]

export type experience = {
  _type: "experience"
  company: string
  linkCompany: Link
  dateStarted: Date
  dateEnded: Date
  place: string
  isCurrentlyWorkingHere: boolean
  jobTitle: string
  points: string[]
}

export type skills = string[]

export type courses = {
  _type: "courses"
  name: string
  date: Date
  place: string
  link: Link
}

export type education = {
  _type: "education"
  title: string
  school: string
  link: Link
  dateStarted: Date
  dateEnded: Date
}

export type languages = {
  _type: "languages"
  name: string
  progress: number
}

export type projects = {
  _type: "projects"
  name: string
  date: Date
  summary: string
  link: Link
}
