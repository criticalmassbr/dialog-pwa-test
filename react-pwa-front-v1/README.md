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


