const { ApolloServer, makeExecutableSchema } = require('apollo-server-express')
const { typeDefs } = require('./schemas/types')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      req: Object.assign({}, req, {
        headers: (req || {}).headers
      })
    }
  }
})

module.exports = server
