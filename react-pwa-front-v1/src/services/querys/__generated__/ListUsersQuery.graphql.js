/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ListUsersQueryVariables = {|
  filter?: ?string
|};
export type ListUsersQueryResponse = {|
  +list: ?$ReadOnlyArray<?{|
    +_id: ?string,
    +name: ?string,
    +company: ?string,
    +age: ?number,
    +eyeColor: ?string,
    +email: ?string,
    +picture: ?string,
  |}>
|};
export type ListUsersQuery = {|
  variables: ListUsersQueryVariables,
  response: ListUsersQueryResponse,
|};
*/


/*
query ListUsersQuery(
  $filter: String
) {
  list(name: $filter) {
    _id
    name
    company
    age
    eyeColor
    email
    picture
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "filter"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "list",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "company",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "age",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "eyeColor",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "picture",
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
    "name": "ListUsersQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ListUsersQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b730cd957172fb0d01785b8d47448e44",
    "id": null,
    "metadata": {},
    "name": "ListUsersQuery",
    "operationKind": "query",
    "text": "query ListUsersQuery(\n  $filter: String\n) {\n  list(name: $filter) {\n    _id\n    name\n    company\n    age\n    eyeColor\n    email\n    picture\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '417bf72098db2a98e0620da8fe28e05f';

module.exports = node;
