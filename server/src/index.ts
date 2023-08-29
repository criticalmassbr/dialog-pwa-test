import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import data from './db.json';

const app = express();
const port = 4000;

// Middleware de log de requisições
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

interface Args {
  name?: string;
}

const typeDefs = gql`
  type User {
    _id: String
    index: Int
    picture: String
    age: Int
    eyeColor: String
    name: String
    company: String
    email: String
    phone: String
    greeting: String
    friends: [User]
  }

  type Query {
    list(name: String): [User]
  }
`;

const resolvers = {
  Query: {
    list: (parent: any, args: Args) => {
      const name = args?.name;

      if (name) {
        const regexPattern = name
          .split(' ')
          .map(part => `(?=.*${part.toLowerCase()})`)
          .join('');

        const regex = new RegExp(regexPattern, 'i');

        const filteredUsers = data.filter(user => regex.test(user.name.toLowerCase()));
        return filteredUsers;
      }

      return data;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startServer().then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
});
