import { Express } from "express";
import { graphqlHTTP } from "express-graphql"
import { buildSchema } from "graphql"
import { readFileSync } from "fs"

import { matchName } from "./modules/string_matcher.js";

var users: Person[]
var app:Express;
var morgan = require("morgan");

//TODO: Implement a version using Apollo (?) as requested
//TODO: Add JSDoc comments
function initServer(){
    
    try{
        let data = readFileSync("dist/server/json/users.json").toString();
        users = JSON.parse(data);
    }catch(e){
        console.error(`Failed to load users DB: (${e}).`);
        return false;
    }
    //TODO: maybe read this from a json?
    let schema = buildSchema(
        `
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
        `
    );

    let handlers = {
        list: ({name})=>{return findName(name)}
    }

    let express = require("express");
    app = express();

    app.use( morgan("tiny") );
    app.use('/graphql',
        graphqlHTTP({
            schema: schema,
            graphiql: true,
            rootValue: handlers
        })
    );
    
    app.listen(4000);
    console.log(`GraphQL server running on port 4000`)
}

//TODO: Add JSDoc comments
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


initServer();