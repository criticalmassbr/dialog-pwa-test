import { graphqlHTTP } from "express-graphql"
import { buildSchema } from "graphql"
import { readFileSync } from "fs"


import { matchName } from "./modules/string_matcher.js";
import { logRequest } from "./modules/log.js";
import { ApolloServer } from "apollo-server";

var users: Person[];
var typeDefs: string;
var resolvers: object;

/**
 * Loads needed dependencies like files and definitions.
 * 
 * @returns {boolean} Flag result of loading process
 */
function loadDependencies():boolean{
    try{
        let data = readFileSync("dist/server/json/users.json").toString();
        users = JSON.parse(data);
    }catch(e){
        console.error(`Failed to load users DB: (${e}).`);
        return false;
    }

    typeDefs =  `
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
        list: ({name})=>{return findName(name)}
    }

    return true;
}

/**
 * Creates Apollo Server instance
 */
function initApollo(): void{
    const morgan = require("morgan");
    const server = new ApolloServer({typeDefs, resolvers: { Query: {list: (parent, {name})=>{return findName(name)} }}, plugins: [logRequest] });
    server.listen().then( ()=>{ console.log("ApolloServer running on port 4000") } )
}

/**
 * Creates an ExpressGraphQL server instance.
 */
function initExpressGraphQL():void{
    const express = require("express");
    const cors = require("cors");
    const morgan = require("morgan");

    const app = express();
    
    app.use( morgan("tiny") );
    app.use(cors());
    app.use( graphqlHTTP({ schema: buildSchema(typeDefs), graphiql: true, rootValue: resolvers}));
    
    app.listen(4000);
    console.log(`HTTPGraphQL running on port 4000`)
}

if(loadDependencies()){
    // initExpressGraphQL(); //Did this one before realizing the apollo-server requirement.
    initApollo();
}
else{
    console.log("Failed to load dependencies.")
}


function findName(name?:string){
    if(name){
        return users.filter(
            (usr:Person) => { return matchName(name, usr.name) }
        );
    }
    else{
        return users;
    }
}
