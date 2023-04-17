import express, { Application } from 'express';
import dotenv from 'dotenv'

import { PORT } from './config'

import middlewaresRouter from './middlewares';

import logger from './utils/logger'

dotenv.config()

const app: Application = express();

app.use(express.json)

// Middlewares
app.use(middlewaresRouter)

app.listen(PORT, () => logger.log(`Server is listening on port ${PORT}!`));

