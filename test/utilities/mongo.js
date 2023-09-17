import { isValidObjectId as isValidObjectIdFunction } from 'mongoose'

export const isValidObjectId = (id) => isValidObjectIdFunction(id)
