"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("graphql");
const fs_1 = require("fs");
const log_js_1 = require("./modules/log.js");
let express = require("express");
let app = express();
let data = fs_1.readFileSync("dist/server/json/users.json");
let users = JSON.parse(data.toString());
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
function personFinder(name) {
    if (name) {
        let name_parts = name.split(" ");
        let patterns = name_parts.map(part => new RegExp(part, "i"));
        console.log(patterns, name_parts);
        return users.filter((usr) => {
            return patterns.some(patt => patt.test(usr.name));
        });
    }
    else {
        return users;
    }
}
let handlers = {
    list: ({ name }) => { return personFinder(name); }
};
app.use((req, res, next) => {
    log_js_1.logQuery(JSON.stringify(req.baseUrl));
    next();
});
app.use('/graphql', express_graphql_1.graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: handlers
}));
app.listen(4000);
console.log("Server running at port 4000");
// app.get()
