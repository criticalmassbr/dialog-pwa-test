import cors from 'cors';
import { Express } from 'express';

export const setupCors = (app: Express): void => {
app.use(cors());
};
