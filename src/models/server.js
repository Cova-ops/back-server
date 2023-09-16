import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

// Config
import config from '../config/config'

// DB
import mongoConnection from '../mongodb/connection'

// Routes
import { routerPorfolio } from '../routes'

// Middlewares
import { errorMiddleware } from '../middlewares'

// Constants

const PREFIX_API = '/api/v1'

// ---------------------------------------------------

class Server {
  constructor () {
    this.app = express()
    this.port = config.server.port

    this.paths = {
      portfolio: `${PREFIX_API}/portfolio`
    }

    this.middlewares()
    this.settings()
    this.routes()
    this.errorsHandler()
  }

  async connectDB () {
    // await dbConnection()
    await mongoConnection()
  }

  middlewares () {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.static('public'))
    this.app.use(morgan('dev'))
  }

  settings () {
    this.app.set('appName', config.server.appName)
    this.app.set('port', this.port)
    this.app.set('view engine', 'ejs')
  }

  routes () {
    this.app.use(this.paths.portfolio, routerPorfolio)

    // // Serve the static files
    // this.app.use(express.static(path.join(__dirname, 'public')))

    // // Handle other routes by serving an HTML file (for SPA, for example)
    // this.app.get('*', (req, res) => {
    //   res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
    //     if (err) {
    //       res.status(500).send(err)
    //     }
    //   })
    // })
  }

  errorsHandler () {
    this.app.use(errorMiddleware.errorHandler)
  }

  async listen () {
    await this.connectDB()
    this.server = this.app.listen(this.port)

    console.log(this.app.get('appName'))
    console.log('⇒ Server on port:', this.port)
  }
}

export default Server
