import 'reflect-metadata';
import 'regenerator-runtime/runtime.js';

import express from 'express';
import fs from 'fs';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import UserTypeDefs from '@domain/User/typeDefs';
import UserResolvers from '@useCases/User/resolvers';

import '@infrastructure/dependenciesRegisters';

(async () => {
  const app = express();
  app.disable('x-powered-by');

  const usersResolvers = new UserResolvers();
  const { users_list } = await usersResolvers.getResolvers();

  const apolloServer = new ApolloServer({
    typeDefs: UserTypeDefs,
    resolvers: users_list,
    playground: true,
  });

  app.use(cors());

  const logsFile = fs.createWriteStream(path.join(__dirname, 'requests.log'), { flags: 'a' });

  morgan.token('body', (req: any, res: any) => JSON.stringify(req.body));

  app.use(
    morgan(':remote-addr - :method :url :status :response-time ms - :res[content-length] :body', {
      stream: logsFile,
    }),
  );

  apolloServer.applyMiddleware({ app, cors: true });

  app.listen(process.env.PORT || 4000, () => {
    console.log(`Graphql-Express server is running! Graphql served in ${apolloServer.graphqlPath}!`);
  });
})();
