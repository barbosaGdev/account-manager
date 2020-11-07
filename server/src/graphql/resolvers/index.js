const { Query, subfieldsResolver } = require('./queries')
const Mutation = require('./mutations')

module.exports = {
  ...subfieldsResolver,
  Query,
  Mutation
}
