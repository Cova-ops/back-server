import { Schema, model } from 'mongoose'

const PageInfoSchema = new Schema({
  address: { type: String, required: true },
  backgroundInformation: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  heroImage: { type: String, required: true },
  heroImage2: { type: String, required: true },
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  profilePic: { type: String, required: true }
}, { collection: 'pageInfo' })

PageInfoSchema.methods.toJSON = function () {
  const { __v, ...data } = this.toObject()
  return data
}

export default model('pageInfo', PageInfoSchema)
