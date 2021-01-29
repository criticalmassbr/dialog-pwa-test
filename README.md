# Dialog FullStack (react/pwa/node) Test

## Objetivo

Desenvolver uma API GraphQL node e um front-end React/PWA:

## Descrição da API

Deve conter uma query `list()`.

A chamada query `list` sem parâmetro (o termo da busca por nome) deverá retornar todos os itens.

Se fornecido o argumento da busca `name`, deverá retornar os dados que contém parte da string, usar RegEx no filtro.

Download: [Data JSON](db.json)

Modelo:
```javascript
[
    {
        "_id": "5f1b3f4b7917ef26107bd58c",
        "index": 0,
        "picture": "https://i.pravatar.cc/200?u=5f1b3f4b7917ef26107bd58c",
        "age": 37,
        "eyeColor": "brown",
        "name": "Weber Stein",
        "company": "VIAGRAND",
        "email": "weber.stein@viagrand.ca",
        "phone": "+1 (866) 533-3564",
        "friends": [
          {
            "_id": "5f1d7f3e8882c9c811b111ce",
            "index": 0,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e8882c9c811b111ce",
            "age": 23,
            "eyeColor": "green",
            "name": "Patti Mckenzie",
            "company": "DAISU",
            "email": "pattimckenzie@daisu.com",
            "phone": "+1 (960) 566-3327"
          },
        ],
        "greeting": "Hello, Weber! You have 9 unread messages."
    }
]
```

### Stack:
- GraphQL (apollo ou relay)
- Express

### Requisitos:
- colocar um middleware no Express para log dos requests
- no final desse `README.md` colocar uma chamada funcional para a API em `curl`.

### Diferencial

- Usar TypeScript
- Regex da pesquisa: considerar caractere de espaço, dado o payload acima `name: Weber Stein`, se entrar com `we in` deve retornar no resultado `Weber Stein`

### Executar o projeto

Deverá executar com `yarn start` na porta 4000


## Descrição do React/PWA

### Tela Inicial
![tela_incial](./docs/browser02.png)

### Tela detalhe de amigos
![tela_detalhe_amigos](./docs/browser03.png)


### Stack:
- React
- React Hooks
- React Router
- Apollo client (opcional)
- styled-components
- CSS Grid
  - deve ser responsivo, no celular exibir apenas um card na horizontal.
- Service Worker
  - app deve funcionar off-line (páginas que foram visitadas)

### Diferencial

- Usar TypeScript

### Executar o projeto

Deverá executar com `yarn start` na porta 3000


### Anotações que valem menção colocar aqui:

Chamada usando curl:

curl 'http://localhost:4000/graphql' -X POST -H 'Content-Type: application/json'  -d '{"operationName":"ListarUsuarios","variables":{"name":"fu"},"query":"query ListarUsuarios($name: String) {list(name: $name) {_id picture age name eyeColor email company friends { _id picture age name eyeColor email company __typename  } __typename }}"}'
