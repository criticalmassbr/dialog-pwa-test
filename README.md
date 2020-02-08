# Spotify Albuns Musicais

PWA (Progressive Web App) desenvolvido com o intuito de exibir os álbuns musicais no Spotify de determinado artista. Para isso foi consumida a API [API GraphQL Spotify](<https://spotify-graphql-server.herokuapp.com/graphql?query=%7B%0A%20%20queryArtists(byName%3A%20%22Metallica%22)%20%7B%0A%20%20%20%20name%0A%20%20%20%20id%0A%20%20%20%20image%0A%20%20%20%20albums%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20image%20%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

## Desenvolvido com

- [React.js](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Create React App](https://create-react-app.dev/)
- [Redux](https://redux.js.org/)
- [React-Redux](https://github.com/reduxjs/react-redux)
- [Redux-Saga](https://github.com/redux-saga/redux-saga)
- [Redux Ducks Pattern](https://github.com/erikras/ducks-modular-redux)
- [React-Router-DOM](https://www.npmjs.com/package/react-router-dom)
- [axios](https://github.com/axios/axios)
- [styled-components](https://www.styled-components.com/)
- [Font Awesome](http://fontawesome.com/)
- [Redux-Saga](https://github.com/redux-saga/redux-saga)
- [typesafe-actions](https://github.com/piotrwitek/typesafe-actions)
- [react-toastify](https://github.com/fkhadra/react-toastify)

## Instalação

1. Clone este repositórios em sua maquina

2. Instale as dependencias usando:

```
yarn install
```

ou

```
npm install
```

## Executar

```
yarn start
```

ou

```
npm run start
```

## Licença

[MIT](https://opensource.org/licenses/MIT)
