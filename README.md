# Dialog FullStack (react/pwa/node) Test
#### Instruções para rodar o projeto:

cd backend && yarn install && yarn start; 
cd frontend && yarn install && yarn start;

Npm pode ser usado ao invés de yarn.
Construído com Node v12.18.2.

#### curl para chamada da api
curl 'http://localhost:4000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"# Write your query or mutation here\n{\n  list {\n\t\tid\n\t\tindex\n\t\tpicture\n\t\tage\n    eyeColor\n\t\tname\n\t\tcompany\n\t\temail\n\t\tphone\n\t\tgreeting\n      \n  }\n}"}' --compressed

#### curl para chamada da api com parametro "Cecilia"
'http://localhost:4000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"# Write your query or mutation here\n{\n  list(name:\"Cecilia\"){\n\t\tid\n\t\tindex\n\t\tpicture\n\t\tage\n    eyeColor\n\t\tname\n\t\tcompany\n\t\temail\n\t\tphone\n\t\tgreeting\n      \n  }\n}"}' --compressed

O tempo de loading dos links de imagem no mock db.json são bem grandes, então adicionei um spinner de loading enquanto ainda não estão prontas
