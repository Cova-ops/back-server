import { PageInfoSchema } from '../mongodb/models/portfolio/index'

export const fetchPageInfo = async () => {
  const pageInfo = await PageInfoSchema.findOne({})
  return pageInfo
}
