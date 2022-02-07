import { GraphQLRequestContext, PluginDefinition } from "apollo-server-core";

export const logRequest:PluginDefinition= {
    requestDidStart : async (context:GraphQLRequestContext)=>{
        let req = context.request;
        console.log(req.http.method, req.http.url, req.operationName, JSON.stringify(req.variables || {}))
    }
}