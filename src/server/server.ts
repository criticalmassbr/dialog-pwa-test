import { Express } from "express";
import { graphqlHTTP } from "express-graphql"
import { buildSchema } from "graphql"
import { readFileSync } from "fs"

import {logQuery} from "./modules/log.js"

let express = require("express");
let app:Express = express();

let data = readFileSync("dist/server/json/users.json");
let users = JSON.parse(data.toString())


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

function personFinder(name?:string){
    if(name){
        let name_parts = name.split(" ");
        let patterns = name_parts.map(part => new RegExp(part, "i"));

        console.log(patterns, name_parts);

        return users.filter(
            (usr:Person) => {
                return patterns.some( patt => patt.test(usr.name))
            }
        );
    }
    else{
        return users
    }
}

let handlers = {
    list: ({name})=>{return personFinder(name)}
}

app.use( 
    (req, res, next) =>{
        logQuery(JSON.stringify(req.baseUrl));
        next();
    }    
)

app.use('/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true,
        rootValue: handlers
    })
);

app.listen(4000);
console.log("Server running at port 4000")


// app.get()