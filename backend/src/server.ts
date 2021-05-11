import express, { Request, Response, NextFunction } from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
  playground: true,
});

const app = express();
app.use(bodyParser.json());
app.use('*', cors());
app.use(compression());

app.use('/graphql', (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body.query);
  console.log(req.body.variables);
  return next();
});

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);

httpServer.listen({ port: 4000 }, (): void =>
  console.log(`\n🚀      GraphQL is now running on http://localhost:4000/graphql`)
);
