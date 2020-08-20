'user strict'

const usersPersistence = require('../db/user.persistence')

module.exports = {
    Query: {
        list: function (root, { name }) {
            console.log(`Buscando usuários usando parâmetro nome [${name}]`)
            return usersPersistence.buscar_pelo_nome(name)
        },
        searchById: function (root, { id }) {
            console.log(`Buscando usuário pelo id [${id}]`)
            return usersPersistence.buscar_pelo_id(id)
        }
    }
}