const RootQuery = `
  type Query {
    listaAtivos: [Ativo],
    listaPassivos: [Passivo]
  }
`

module.exports = RootQuery
