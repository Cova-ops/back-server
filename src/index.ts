import express, { Application } from 'express';
import dotenv from 'dotenv'

import { PORT } from './config'

import middlewaresRouter from './middlewares';
import { router } from './routes'
import logger from './utils/logger'

dotenv.config()

const app: Application = express();

app.use(express.json())

logger.log(process.cwd())

// Public files
app.use('/public', express.static(process.cwd() + '/public'))

// Middlewares
app.use(middlewaresRouter)

// Alive
app.get('/', (req, res) => res.send('Dacovasan\'s Back'))

// Router
app.use('/back', router)

app.listen(PORT, () => logger.log(`Server is listening on port ${PORT}!`));

