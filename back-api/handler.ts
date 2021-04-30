import 'source-map-support/register'
import * as serverlessHttp from 'serverless-http'
import app from './src/config/server'

const handler = serverlessHttp(app)

export const run = (event, context) => {
  return handler(event, context)
}
