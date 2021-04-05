# Dialog FullStack (react/pwa/node) Test Gustavo Miranda

## Descrição da API

Contém uma query `list()`.

A chamada query `list` sem parâmetro (o termo da busca por nome) retorna todos os itens.

Se fornecido o argumento da busca `name`, retorna os dados que contém parte da string. Está usando RegEx no filtro.

### Stack utilizada:
- GraphQL (apollo)
- Express
- Morgan (logs)
### Chamada cURL
Query list recebendo nome como parâmetro e retornando todos os campos do JSON.

`curl 'http://localhost:4000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"{\n  list(name:\"Dotson Jenning\") {\n    _id,index,picture,age,eyeColor,name,company,email,phone,greeting\n   friends {\n    name,_id,index,picture,age,eyeColor,name,company,email,phone\n  }\n  }\n}"}' --compressed`

obs: se passar apenas list (sem parâmetro) retorna todos os registros.
`curl 'http://localhost:4000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"{\n  list {\n    _id,index,picture,age,eyeColor,name,company,email,phone,greeting\n   friends {\n    name,_id,index,picture,age,eyeColor,name,company,email,phone\n  }\n  }\n}"}' --compressed`

### Diferencial aplicado

- Usa TypeScript
- Regex da pesquisa está considerando caractere de espaço. No exemplo, dado o payload acima `name: Weber Stein`, se entrar com `we in` a api retorna no resultado `Weber Stein`

### Executar o projeto

Executa com `yarn start` na porta 4000


## Descrição do React/PWA

### Tela Inicial
![tela_incial](./docs/Screenshot_13.jpg)

### Tela detalhe de amigos
![tela_detalhe_amigos](./docs/Screenshot_1.jpg)


### Stack:
- React
- React Hooks
- React Router
- React Query
- styled-components
- CSS Grid
  - Grid responsiva, no celular exibir apenas um card na horizontal.
- Service Worker
  - app funciona off-line (páginas que foram visitadas exibem elementos HTML em cache)

### Diferencial

- Usa TypeScript

### Executar o projeto

Executa com `yarn start` na porta 3000


### Anotações que valem menção colocar aqui:
...
A página de detalhes de usuário recebe pela rota o nome do usuário e realiza a busca na api através do nome. É passado na rota o _id também (caso em futura implementação possa ser buscado através dele).
Como os registros dentro do array Friends de cada usuário não possuem seu respectivo registro na base de dados, ao clicar em um card de um amigo a mesma página de detalhes será carregada com a busca por nome efetuada podendo ou não encontrar o usuário correto.

Exemplo:
http://localhost:3000/user-details/Richards%20Morin/5f1d7f3e6fe7aa6298ccf0e0
Richards Morin tem amizade com Cecilia Phillips mas foi carregado usuário Jan Richardson (nome mais próximo).

obs: a fim de simular o fluxo ideal de navegação ao clicar nos cards de detalhe de amigos foi implementado desta forma, podendo ser feita uma posterior refatoração para a validação correta do usuário carregado.

