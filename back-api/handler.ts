import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const run: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Vizir teste prático!',
      input: event,
    }, null, 2),
  };
}
