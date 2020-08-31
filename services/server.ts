import { ApolloServer, IResolvers } from 'apollo-server-express'
import * as express from'express'
import * as cors from'cors'
import * as Users from '../db.json'

import typeDefs from './typeDefs'

const PORT: number = 8000
const corsOptions: Object = {
  origin: '*',
  // credentials: true,
  preflightContinue: true,
  optionsSuccessStatus: 200
}

const resolvers: IResolvers = {
  Query: {
    list: (context: any, {name}: {name?: string}): typeof Users  => {
      if(name) {                          
        const regex = new RegExp(`\\b(\\w*${name}\\w*)\\b`)
        return Users.filter(user => regex.test(user.name))
      } else {
        return Users
      }    
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