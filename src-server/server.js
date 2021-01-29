const express = require('express')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')
const static = express.static('build')
const morgan = require('morgan')
const resolvers = require('./resolvers')
const schemas = require('./schema')

const app = express()
const port = 4000


app.use(morgan('tiny'))
app.use(cors({ origin: '*' }))
app.use('/', static)
app.use('/usuario/*', static)
app.use('/busca*', static)

const server = new ApolloServer({ typeDefs: schemas, resolvers })
server.applyMiddleware({ app })


app.listen(port, () => {
    console.log(`Porta do servidor http://localhost:${port}`)
})