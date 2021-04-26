import "reflect-metadata";

import express from "express";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./schema";

async function initApolloServer(): Promise<ApolloServer> {
  const server = new ApolloServer({
    schema: await schema
  });

  return server;
}

initApolloServer().then(server => {

  const app = express();
  app.use(express.json());
  
  app.use("*", (req, res, next) => {
    console.log(req.body.query);
    next();
  });

  server.applyMiddleware({ app });
  
  app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath));
});