type Link = string

export type pageInfo = {
  _type: "pageInfo"
  address: string
  backgroundInformation: string
  email: string
  role: string
  heroImage: Link
  name: string
  phoneNumber: Link
}

export type technology = {
  _type: 'technology'
  image: Link
  progress: number
  title: string
}

export type social = {
  _type: "social"
  title: string
  url: Link
}

export type skill = {
  _type: 'skill'
  image: Link
  progress: number
  title: string
}

export type project = {
  _type: 'project'
  title: string
  image: Link
  linkToBuild: Link
  summary: string
  technologies: technology[]
}

export type experience = {
  _type: 'experience'
  company: string
  companyImage: Link
  dateStarted: Date
  dateEnded: Date
  isCurrentlyWorkingHere: boolean
  jobTitle: string
  points: string[]
  technologies: technology[]
}

