import fastify from 'fastify'

const app = fastify()

const PORT = 3333

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log('🚀 Server is running on http://localhost:3333')
  })
