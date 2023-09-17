import { Schema, model } from 'mongoose'

const ProjectsSchema = new Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  image: { type: String, required: true },
  linkToBuild: { type: String, required: true },
  technologies: { type: Schema.Types.ObjectId, ref: 'skills' }
}, { collection: 'projects' })

ProjectsSchema.methods.toJSON = function () {
  const { __v, ...data } = this.toObject()
  return data
}

export default model('projects', ProjectsSchema)
