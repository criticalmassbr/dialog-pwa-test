import 'module-alias/register';
import app from '@/main/config/app';
import { env } from '@/main/config/env';
import { createServer } from 'http';

const server = createServer(app);

server.listen(env.port, () => {
	console.log(`running server on port ${env.port}`);
});
