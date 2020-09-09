import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import fs from 'fs';
import path from 'path';
const morgan =  require('morgan');
const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
});

//basic middleware
app.use('*', cors());
app.use(compression());

//sets up logger
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
morgan.token('body', function (req:any, res:any) { return JSON.stringify(req.body) });
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]', { stream: accessLogStream }));


//adds graphql to express app and creates http
server.applyMiddleware({ app, path: '/graphql' });
const httpServer = createServer(app);
httpServer.listen(
  { port: 4000 },
  (): void => console.log(`\n🚀      GraphQL is now running on http://localhost:4000/graphql`));