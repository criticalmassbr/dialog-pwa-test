"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("graphql");
const fs_1 = require("fs");
const string_matcher_js_1 = require("./modules/string_matcher.js");
const log_js_1 = require("./modules/log.js");
const apollo_server_1 = require("apollo-server");
var users;
var typeDefs;
var resolvers;
/**
 * Loads needed dependencies like files and definitions.
 *
 * @returns {boolean} Flag result of loading process
 */
function loadDependencies() {
    try {
        let data = fs_1.readFileSync("dist/server/json/users.json").toString();
        users = JSON.parse(data);
    }
    catch (e) {
        console.error(`Failed to load users DB: (${e}).`);
        return false;
    }
    typeDefs = `
        type Query {
            list(name:String): [Person]
        }

        type Person {
            _id: String!
            index: Int,
            picture: String,
            age: Int,
            eyeColor: String,
            name: String,
            company: String,
            email: String,
            phone: String,
            greeting: String,
            friends: [Person]
        }
    `;
    resolvers = {
        list: ({ name }) => { return findName(name); }
    };
    return true;
}
/**
 * Creates Apollo Server instance
 */
function initApollo() {
    const morgan = require("morgan");
    const server = new apollo_server_1.ApolloServer({ typeDefs, resolvers: { Query: { list: (parent, { name }) => { return findName(name); } } }, plugins: [log_js_1.logRequest] });
    server.listen().then(() => { console.log("ApolloServer running on port 4000"); });
}
/**
 * Creates an ExpressGraphQL server instance.
 */
function initExpressGraphQL() {
    const express = require("express");
    const cors = require("cors");
    const morgan = require("morgan");
    const app = express();
    app.use(morgan("tiny"));
    app.use(cors());
    app.use(express_graphql_1.graphqlHTTP({ schema: graphql_1.buildSchema(typeDefs), graphiql: true, rootValue: resolvers }));
    app.listen(4000);
    console.log(`HTTPGraphQL running on port 4000`);
}
if (loadDependencies()) {
    // initExpressGraphQL(); //Did this one before realizing the apollo-server requirement.
    initApollo();
}
else {
    console.log("Failed to load dependencies.");
}
function findName(name) {
    if (name) {
        return users.filter((usr) => { return string_matcher_js_1.matchName(name, usr.name); });
    }
    else {
        return users;
    }
}
