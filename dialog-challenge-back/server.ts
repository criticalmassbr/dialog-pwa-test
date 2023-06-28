import { ApolloServer } from "apollo-server-express";
import express from "express";
import { typeDefs } from "./schemas/schema";
import { resolvers } from "./resolvers/resolvers";
import { loggingMiddleware } from "./middlewares/loggingMiddleware";

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers, debug: true });

  const app = express();

  app.use(loggingMiddleware);

  await server.start();
  server.applyMiddleware({ app });

  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(
      `Servidor Apollo em execução em http://localhost:${PORT}${server.graphqlPath}`
    );
  });
};

startServer().catch((error) => {
  console.error("Erro ao iniciar o servidor Apollo:", error);
});
