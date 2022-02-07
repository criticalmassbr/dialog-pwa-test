"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Express } from "express";
// import { graphqlHTTP } from "express-graphql"
const graphql_1 = require("graphql");
const fs_1 = require("fs");
const apollo_server_1 = require("apollo-server");
const string_matcher_js_1 = require("./modules/string_matcher.js");
var users;
// var app:Express;
// var morgan = require("morgan");
//TODO: Implement a version using Apollo (?) as requested
//TODO: Add JSDoc comments
function initServer() {
    try {
        let data = fs_1.readFileSync("dist/server/json/users.json").toString();
        users = JSON.parse(data);
    }
    catch (e) {
        console.error(`Failed to load users DB: (${e}).`);
        return false;
    }
    //TODO: maybe read this from a json?
    let schema = graphql_1.buildSchema(`
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
        `);
    let resolvers = {
        Query: {
            list: ({ name }) => { return findName(name); }
        }
    };
    let server = new apollo_server_1.ApolloServer({ schema, resolvers });
    server.listen()
        .then(() => console.log(`GraphQL server running on port 4001`));
    // let express = require("express");
    // let cors = require("cors");
    // app = express();
    // app.use( morgan("tiny") );
    // app.use( cors() );
    // app.options('*', cors())
    // app.use('/graphql',
    //     graphqlHTTP({
    //         schema: schema,
    //         graphiql: true,
    //         rootValue: handlers
    //     })
    // );
    // app.listen(4000);
}
//TODO: Add JSDoc comments
function findName(name) {
    if (name) {
        return users.filter((usr) => { return string_matcher_js_1.matchName(name, usr.name); });
    }
    else {
        return users;
    }
}
initServer();
