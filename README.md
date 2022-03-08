# Dialog FullStack (react/pwa/node) Test

## Objetivo

Desenvolver uma API GraphQL node e um front-end React/PWA:

## [Descrição da API](/server/README.md)

## [Descrição do React/PWA](/client/README.md)


## Anotações que valem menção colocar aqui:
chamada funcional para a API em `curl`;
```
curl --request POST \
  --header 'content-type: application/json' \
  --url http://localhost:4000/api \
  --data '{"query":"query { __typename }"}'
```