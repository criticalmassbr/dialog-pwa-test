import { Express, Request, Response } from 'express';
import morgan from 'morgan';

export const setupMorgan = (app: Express): void => {
  morgan.token('body', (req:Request, res:Response) => JSON.stringify(req.body).split(' ')
.join('').split('\\n')
.join(' '));
 app.use(morgan(':method :url :response-time :body'));
};
