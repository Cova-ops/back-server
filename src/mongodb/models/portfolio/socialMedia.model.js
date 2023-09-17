import { Schema, model } from 'mongoose'

const SocialMediaSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true }
}, { collection: 'socialMedia' })

SocialMediaSchema.methods.toJSON = function () {
  const { __v, ...data } = this.toObject()
  return data
}

export default model('socialMedia', SocialMediaSchema)
