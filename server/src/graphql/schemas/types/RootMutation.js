const RootMutation = `
  type Mutation {
    adicionaAtivo(nome: String, valor: Float): Ativo,
  }
`

module.exports = RootMutation
