export const myPlugin = {
	// Fires whenever a GraphQL request is received from a client.
	async requestDidStart(requestContext: any) {
		return {
			// Fires whenever Apollo Server will parse a GraphQL
			// request to create its associated document AST.
			// async parsingDidStart(requestContext: any) {
			// 	console.log("Parsing started!");
			// },

			// Fires whenever Apollo Server will validate a
			// request's document AST against your GraphQL schema.
			async validationDidStart(requestContext: any) {
				// console.log("Validation started!");

				const query = requestContext.request.query;

				if (!(query.indexOf("IntrospectionQuery") > -1)) {
					const { logger, request, response } = requestContext;
					const { operationName, variables, http } = request;
					// console.log(requestContext)
					const log = {
						time: new Date(),
						operationName,
						variables,
						query,
						http: {
							method: http.method,
						},
						response,
						// metrics: requestContext.metrics
					};
					console.log("");
					// console.log("Request started! Query:\n" + query);
					console.log("Log:");
					console.log(log);
				}
			},
		};
	},
};
