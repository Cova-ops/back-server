import express, { Application } from 'express';
import dotenv from 'dotenv'

import { PORT } from './config'

import middlewaresRouter from './middlewares';
import { router } from './routes'
import logger from './utils/logger'

dotenv.config()

const app: Application = express();

app.use(express.json())

// Router
app.use('/back', router)

// Middlewares
app.use(middlewaresRouter)

app.listen(PORT, () => logger.log(`Server is listening on port ${PORT}!`));

