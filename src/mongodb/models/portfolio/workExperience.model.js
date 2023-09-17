import { Schema, model } from 'mongoose'

const WorkExperienceSchema = new Schema({
  company: { type: String, required: true },
  companyImage: { type: String, required: true },
  dateStarted: { type: String, required: true },
  dateEnded: { type: String, required: true },
  isCurrentlyWorkingHere: { type: Boolean, required: true },
  jobTitle: { type: String, required: true },
  points: { type: [String], required: true },
  technologies: [{ type: Schema.Types.ObjectId, ref: 'skills' }]
}, { collection: 'workExperience' })

WorkExperienceSchema.methods.toJSON = function () {
  const { __v, ...data } = this.toObject()
  return data
}

export default model('workExperience', WorkExperienceSchema)
