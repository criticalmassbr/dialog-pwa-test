# Dialog FullStack (react/pwa/node) Test

#### Sobre clonagem do repositório: 

#### Para clonar o repositório é necessario usar a tag --recursive para carregar os submodules que dependem de outros repositórios.
#### git clone https://github.com/guidovin/dialogSocialDemo.git --recursive


#### Para importar de outra forma, como checkout, é necessário rodar o comando: 
#### git submodules update --init --recursive

Caso contrário backend/ e frontend/ estarão vazias.

#### Instruções para rodar o projeto:

cd dialogSocialDemo && cd challenge_backend && yarn install && yarn start; 
cd dialogSocialDemo && cd challenge_frontend && yarn install && yarn start;

Npm can be used instead of yarn.
Built with Node v12.18.2.

#### curl para chamada da api
curl 'http://localhost:4000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"# Write your query or mutation here\n{\n  list {\n\t\tid\n\t\tindex\n\t\tpicture\n\t\tage\n    eyeColor\n\t\tname\n\t\tcompany\n\t\temail\n\t\tphone\n\t\tgreeting\n      \n  }\n}"}' --compressed

#### curl para chamada da api com parametro "Cecilia"
'http://localhost:4000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"# Write your query or mutation here\n{\n  list(name:\"Cecilia\"){\n\t\tid\n\t\tindex\n\t\tpicture\n\t\tage\n    eyeColor\n\t\tname\n\t\tcompany\n\t\temail\n\t\tphone\n\t\tgreeting\n      \n  }\n}"}' --compressed

O tempo de loading dos links de imagem no mock db.json são bem grandes, então adicionei um spinner de loading enquanto ainda não estão prontas (instantaneo se já na cache)
