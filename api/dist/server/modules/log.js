"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRequest = void 0;
exports.logRequest = {
    requestDidStart: async (context) => {
        let req = context.request;
        console.log(req.http.method, req.http.url, req.operationName, JSON.stringify(req.variables || {}));
    }
};
