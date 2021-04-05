import { setupApolloServer } from '@/main/config/apollo-server';
import { setupCors } from '@/main/config/cors';
import { setupMorgan } from '@/main/config/morgan';

import express from 'express';

const app = express();
setupCors(app);
setupMorgan(app);
setupApolloServer(app);
export default app;
