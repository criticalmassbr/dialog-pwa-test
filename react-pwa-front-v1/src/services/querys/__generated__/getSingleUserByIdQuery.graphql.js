/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type getSingleUserByIdQueryVariables = {|
  _id?: ?string
|};
export type getSingleUserByIdQueryResponse = {|
  +user: ?{|
    +_id: ?string,
    +name: ?string,
    +age: ?number,
    +email: ?string,
    +picture: ?string,
    +friends: ?$ReadOnlyArray<?{|
      +_id: ?string,
      +name: ?string,
      +company: ?string,
      +age: ?number,
      +eyeColor: ?string,
      +email: ?string,
      +picture: ?string,
    |}>,
  |}
|};
export type getSingleUserByIdQuery = {|
  variables: getSingleUserByIdQueryVariables,
  response: getSingleUserByIdQueryResponse,
|};
*/


/*
query getSingleUserByIdQuery(
  $_id: ID
) {
  user(_id: $_id) {
    _id
    name
    age
    email
    picture
    friends {
      _id
      name
      company
      age
      eyeColor
      email
      picture
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "_id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "age",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "picture",
  "storageKey": null
},
v6 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "_id"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "friends",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "company",
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "eyeColor",
            "storageKey": null
          },
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "getSingleUserByIdQuery",
    "selections": (v6/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getSingleUserByIdQuery",
    "selections": (v6/*: any*/)
  },
  "params": {
    "cacheID": "6f4f819e7827182287bf5f8102d357f1",
    "id": null,
    "metadata": {},
    "name": "getSingleUserByIdQuery",
    "operationKind": "query",
    "text": "query getSingleUserByIdQuery(\n  $_id: ID\n) {\n  user(_id: $_id) {\n    _id\n    name\n    age\n    email\n    picture\n    friends {\n      _id\n      name\n      company\n      age\n      eyeColor\n      email\n      picture\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e0537768c889033292009f93a130c38f';

module.exports = node;
