import { Schema, model } from 'mongoose'

const SkillsSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  progress: { type: Number, required: true }
}, { collection: 'skills' })

SkillsSchema.methods.toJSON = function () {
  const { __v, ...data } = this.toObject()
  return data
}

export default model('skills', SkillsSchema)
