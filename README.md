# Dialog FullStack (react/pwa/node) Test

## Entrega

Olá, avaliador(a)!

Me chamo Pedro Mihael, participante do processo seletivo para vaga de desenvolvedor full stack na Dialog.

Como solicitado, venho entregar meu teste dentro do prazo.

Abaixo, estão descrições do que foi feito.

Caso deseje verificar commits, processo de criação, tempo de dedicação e afins, os repositórios separados para estas frentes são:
- [api](https://github.com/pedromihael/express-graphql-api) 
- [pwa](https://github.com/pedromihael/react-social-network)

Grato desde já pela oportunidade.

## Descrição da API

Contém uma query `list` (sem parâmetros) que retorna todos os itens.

Contém uma query `list(name: String)` que retorna os itens cujo nome satisfaça a expressão regular definida em código.

A cada request, logs são escritos num arquivo dentro de `./backend/src/infrastructure/`.

Nesta api, foram utilizados os conceitos de:
-[x] Clean Architecture
-[x] Injeção de dependência
-[x] Inversão de dependência
-[x] Testes unitários
-[x] Build Pattern
-[x] Repository Pattern
-[x] Singleton Pattern
### Stack:
- GraphQL com Apollo Server
- Express
- Typescript
- Jest para testes
### Executar o projeto
`yarn` fará a instalação dos pacotes necessários.
`yarn start` servirá a api na porta 4000.

### Consumir via cURL

```
curl 'http://localhost:4000/graphql' -sH 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"{list {_id index picture age eyeColor name company email phone greeting}}"}'
```

## Descrição do React/PWA

Nesta PWA, foram utilizados os conceitos de:
-[x] SMACSS
-[x] Hooks: useState, useEffect, useMemo, useCallback e useContext
-[x] Hooks customizados
-[x] CSS-in-JS (Styled Components)
-[x] Responsividade
-[x] Alternância entre temas claro e escuro
-[x] Intenção de pesquisa A/B (dispor feature exequível, porém, não desenvolvida, para captar intenções de uso daquela feature)

### Telas
![tela_incial_1](./pwa/prints/light-mobile-home.jpg)
![tela_incial_2](./pwa/prints/dark-mobile-home.jpg)
![tela_incial_3](./pwa/prints/light-mobile-user.jpg)
![tela_incial_4](./pwa/prints/dark-mobile-user.jpg)
![tela_incial_5](./pwa/prints/light-desktop-home.jpg)
![tela_incial_6](./pwa/prints/dark-desktop-home.jpg)
![tela_incial_7](./pwa/prints/light-desktop-user.jpg)
![tela_incial_8](./pwa/prints/dark-desktop-user.jpg)

### Stack:
- React
- React Hooks
- React Router
- Apollo client
- styled-components
- CSS Grid & Flexbox
- Service Worker para offline


### Executar o projeto
`yarn` fará a instalação dos pacotes necessários.
`yarn start` servirá o pwa na porta 3000.
