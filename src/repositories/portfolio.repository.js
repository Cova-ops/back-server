import { portfolioModel } from '../mongodb/models'

export const fetchPageInfo = async () => {
  const pageInfo = await portfolioModel.find({})
  console.log({ pageInfo })
  return pageInfo
}
