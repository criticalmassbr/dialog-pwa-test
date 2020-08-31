import { ApolloServer } from 'apollo-server-express'
import * as express from'express'
import * as cors from'cors'
import * as Users from '../db.json'

import typeDefs from './typeDefs'

const PORT = 8000
const corsOptions = {
  origin: '*',
  // credentials: true,
  preflightContinue: true,
  optionsSuccessStatus: 200
}

const resolvers = {
  Query: {
    list: (args: Object, name?: string) => {
      console.log(args)
      
      return Users
    }
  }
}

const apolloServer = new ApolloServer({ resolvers, typeDefs })

const app = express()

app.use(cors(corsOptions))

apolloServer.applyMiddleware({ app, path: "/graphql"})

app.listen(PORT, () => {
  console.info(`GRAPHQL service listening on port ${PORT}`)
})