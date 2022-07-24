import "reflect-metadata";

import path from 'path';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import fs from 'fs';
import { graphqlHTTP } from 'express-graphql';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolvers/UserResolver';

async function Server() {
  const app = express();

  const schema = await buildSchema({
    resolvers: [ UserResolver ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gpl'),
  });

  const graphqlServer = new ApolloServer({
    schema,
  });

  let logs = fs.createWriteStream(path.join(__dirname, 'logs.log'), { flags: 'a' });
  morgan.token('body', function (req: any, res: any) { return JSON.stringify(req.body) });

  app.use(cors({ origin: '*' }));
  app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]', { stream: logs }));
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));

  app.listen(4000, () => {
    console.log("Server running on http://localhost:4000/graphql");
  });
}

export default Server;