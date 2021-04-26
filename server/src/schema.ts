import { buildSchema } from 'type-graphql';
import path from 'path'; 

export const schema = buildSchema({
    resolvers: [path.join(__dirname, './modules/user', `**/*-resolver.*s`)],
    validate: false,
});