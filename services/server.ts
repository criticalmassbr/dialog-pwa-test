import { ApolloServer, IResolvers } from 'apollo-server-express'
import * as express from 'express'
import * as cors from 'cors'
import * as morgan from 'morgan'
import * as Friends from '../db.json'

import typeDefs from './typeDefs'

const PORT: number = 4000

const resolvers: IResolvers = {
  Query: {
    list: (context: any, {name}: {name?: string}): typeof Friends  => {
      console.log(name)
      if(name) {                              
        const regex = new RegExp(`\\b(\\w*${name}\\w*)\\b`)
        return Friends.filter(user => regex.test(user.name))
      } else {
        return Friends
      }    
    }
  }
}

const apolloServer = new ApolloServer({ resolvers, typeDefs })

const app = express()

app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

apolloServer.applyMiddleware({ app, path: "/graphql"})

app.listen(PORT, () => {
  console.info(`GRAPHQL service listening on port ${PORT}`)
})