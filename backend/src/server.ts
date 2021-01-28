import { ApolloServer } from 'apollo-server-express';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import fs from 'fs';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';

import path from 'path';
import schema from './schema';

const app = express();
const graphqlServer = new ApolloServer({
  schema,
  validationRules: [depthLimit(10)],
});
const morgan = require('morgan');

app.use('*', cors());
app.use(compression());

let logs = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
morgan.token('body', function (req: any, res: any) { return JSON.stringify(req.body) });
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]', { stream: logs }));

graphqlServer.applyMiddleware({ app, path: '/graphql' });
const httpServer = createServer(app);
httpServer.listen(
  { port: 4000 },
  (): void => console.log(`\n GraphQL is on http://localhost:4000/graphql`));