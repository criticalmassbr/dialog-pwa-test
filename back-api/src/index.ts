import app from './config/server'

const port = process.env.PORT || 4000
const NODE_ENV = process.env.NODE_ENV || 'development'

app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}/graphql, env: ${NODE_ENV}`
  )
)
