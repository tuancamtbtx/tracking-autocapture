import express, { Application } from 'express'

require('dotenv').config()

import Routers from '@src/app/routers'
import logger from '@src/utils/logger'

import { errorReleaseMiddleware, error404Forwarder } from '@src/app/middlewares/error.middleware'
import corsMiddleware from '@src/app/middlewares/cors.middleware'
const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(corsMiddleware)

app.use('/health', Routers.HealthRouter)
app.use('/tracking', Routers.TrackingRouter)

app.use(error404Forwarder)
app.use(errorReleaseMiddleware)

const PORT = 8080
const HOST_NAME = '0.0.0.0'

app.listen(PORT, HOST_NAME, () => {
  logger.info(`Server running on host ${HOST_NAME}: port ${PORT}`)
})
