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

Este projeto foi solicitado pela Dialog.ci como parte do processo de seleção de recursos humanos.

Visto a demanda de desenvolvimento de uma aplicação PWA utilizando React e consumindo informações de servidor GraphQL, defini como arquitetura mínima necessária:

## Front-end
React + Relay + Service Worker + IndexedDB

## Back-end
Node.Js + Express + GraphQL.

## Inicialização do projeto de Back-end
O servidor de Back-end deve ser inicializado com o comando:
`nodejs index.js`

Este processo irá inicializar na porta 4000.

## Inicialização do projeto de Front-end
O servidor de Front-end pode ser inicializado com o comando:
`yarn start`

Este processo irá inicializar na porta 3000.

Contudo para instalação e validação da funcionalidade de PWA é necessário efetuar o build do projeto e servir o projeto finalizado em outra porta.

Comando para compilar o projeto:
`yarn build`

Comando para instalar a biblioteca 'serve' que permite executar o projeto compilado.
`yarn global add serve`

Comando para inicializar o projeto compilado
`serve -s build`

Esse comando deve levantar o projeto compilado na porta 5000

## Validação PWA
O Google Chrome bloqueia a instalação de aplicações PWA fora de um ambiente de segurança em HTTPS. Contudo, é possível efetuar a validação no Localhost, sendo assim é necessário acessar a página e instalar no computador.

`http://localhost:5000/`

Após essa instalação é possível remover a rede do computador e o aplicativo continua funcionando offline.


A estrutura inicial do projeto foi criada utilizando a biblioteca create-react-app.

## Observações importantes

Existe uma divergência entre o modelo de dados proposto no desafio e modelo oferecido. O atributo que representa o NOME do usuário deveria ser dividido em NOME (first) e SOBRENOME (last), contudo a base oferecida apresenta o atributo name como representação para o NOME e SOBRENOME. Não sendo um problema crítico dei continuidade ao desenvolvimento do projeto.

Nas filtragens efetuadas no backend e frontend foram efetuadas utilizando a construção de objeto RegEX e validação pelo método test().

Foi criado um middleware para armazenamento do log das requisições enviadas. Inicial essas requisições está sendo exibidas na saída do processo de execução, contudo pode ser adaptado para armazenamento em arquivo ou banco de dados.

O Mockup fornecido foi utilizado para construção das telas do aplicativo. Contudo, em aplicações Mobile, nesse caso PWA, onde não é exibida a barra de navegação do browser, é necessário um botão físico de retorno. Visto que não existia no projeto esse botão a funcionalidade foi incluída no evento onClick da logo do projeto "MySocial"

Foi encontrada um problema de consistência nos dados da plataforma. Pois a lista de usuários possui 45 item, contudo os usuários na listagem de amigos (atributo friends) não fazem parte desta lista. Logo a funcionalidade de clique e navegação para o perfil ficou aplicada apenas na listagem da tela "UsersPage", visto que o clique para acesso do perfil dos amigos gera erro de dado não existente.

No Mockup da tela de visualização do perfil do usuário foi mantido o campo filter ao lado da logo.  Contudo não existe mais lista de usuários para serem filtradas e a posição do campo pode confundir o usuário na navegação. De qualquer forma, foi implementado na posição indicada com a funcionalidade de filtragem da listagem de amigos.

Todas as telas utilizam os componentes estruturais personalizados criados no projeto, Container, Row e Grid. Os quais foram criados de forma responsiva.


## Requisição Curl para comunicação com servidor de Backend

`curl 'http://localhost:4000/graphql' -X POST -H 'Content-Type: application/json' --data '{ "query": "{ list(name: \"\") { _id name picture age eyeColor company } }" }'`



