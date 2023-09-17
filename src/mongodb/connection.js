import mongoose from 'mongoose'

import config from '../config/config.js'

export const makeConnection = async () => {
  try {
    await mongoose.connect(config.mongo.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
      // useCreateIndex: true,
      // useFindAndModify: false
    })
    console.log('Mongo connection has been established successfully')
  } catch (error) {
    console.error(error)
    throw new Error('Error starting mongo database')
  }
}

export const closeConnection = async () => {
  try {
    await mongoose.connection.close()
    console.log('Mongo connection has been closed successfully')
  } catch (error) {
    console.error(error)
    throw new Error('Error closing mongo database')
  }
}
