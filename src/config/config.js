import dotenv from 'dotenv'
dotenv.config()

const NODE_ENV = process.env.NODE_ENV || 'DEV'

export default {
  sql: {
    host: process.env[`${NODE_ENV}_DB_HOST`] ?? '',
    port: process.env[`${NODE_ENV}_DB_PORT`] ?? '',
    user: process.env[`${NODE_ENV}_DB_USER`] ?? '',
    password: process.env[`${NODE_ENV}_DB_PASSWORD`] ?? '',
    name: process.env[`${NODE_ENV}_DB_NAME`] ?? '',
    dialect: process.env[`${NODE_ENV}_DB_DIALECT`] ?? ''
  },
  server: {
    port: process.env.PORT ?? 3000,
    appName: process.env.APP_NAME ?? 'Backend Cova-ops'
  },
  mongo: {
    url: process.env[`${NODE_ENV}_MONGO_URL`] ?? ''
  }
}
