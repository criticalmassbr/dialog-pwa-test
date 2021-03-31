import { setupApolloServer } from '@/main/config/apollo-server'

import express from 'express'

const app = express()
setupApolloServer(app)
export default app
