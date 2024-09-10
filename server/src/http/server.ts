import fastify from 'fastify'
import { env } from '../config/env'

const app = fastify()

app
  .listen({
    port: env.SERVER_PORT,
  })
  .then(() => {
    console.log('🚀 Server is running on http://localhost:3333')
  })
