const {
    PassivoModel
} = require('../models')


const getPassivos = async ({ }) => {
    const Passivo = await PassivoModel()

    const passivos = await Passivo.find({}).toArray()

    return passivos
}

module.exports = {
    getPassivos
}
