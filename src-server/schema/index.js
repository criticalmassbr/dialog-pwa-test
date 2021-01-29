const path = require('path')
const mergeGraphQLSchemas = require('merge-graphql-schemas')
const arquivos = path.join(__dirname, './')
const { fileLoader, mergeTypes } = mergeGraphQLSchemas
const arquivosCarregados = fileLoader(arquivos)
const schemas = mergeTypes(arquivosCarregados)

module.exports = schemas