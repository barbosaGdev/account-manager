const { AtivoService } = require('../../../services')

const listaAtivos = async function(parent, { }, context) {
  return await new Promise((resolve, reject) => {
    AtivoService.getAtivos({})
      .then(content => {
        resolve(content)
      })
      .catch(reject)
  })
}

module.exports = listaAtivos
