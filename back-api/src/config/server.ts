import { ApolloServer } from 'apollo-server-express'
import * as express from 'express'
import * as cors from 'cors'

import schema from '../schema/schema'

const app = express()
app.use(cors())

const server = new ApolloServer({
  introspection: true,
  playground: true,
  schema,
})
server.applyMiddleware({ app, path: '/graphql' })

export default app
