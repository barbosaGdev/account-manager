const {
    AtivoModel
} = require('../models')


const createNewAtivo = async ({ nome, valor }) => {
    const Ativo = await AtivoModel()

    const newAtivo = await Ativo.insertOne({ nome, valor })

    return newAtivo.ops[0]
}

const getAtivos = async ({ }) => {
    const Ativo = await AtivoModel()

    const ativos = await Ativo.find({}).toArray()

    return ativos
}

module.exports = {
    getAtivos,
    createNewAtivo
}
