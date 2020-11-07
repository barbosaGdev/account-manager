const { AtivoService } = require('../../../services')
const { AtivoModel } = require('../../../models')


const adicionaAtivo = async function (parent, { nome, valor }, context) {
    return await new Promise((resolve, reject) => {
        AtivoService.createNewAtivo({ nome, valor }).then(content => {
            resolve(content)
        }).catch(reject)
    })

}

module.exports = adicionaAtivo 