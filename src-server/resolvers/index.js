const path = require('path')
const { fileLoader } = require('merge-graphql-schemas')
const arquivos = path.join(__dirname, './')
const arquivosCarregados = fileLoader(arquivos)

module.exports = arquivosCarregados
