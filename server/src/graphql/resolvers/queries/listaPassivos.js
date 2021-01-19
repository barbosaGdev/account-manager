const { PassivoService } = require('../../../services')

const listaPassivos = async function(parent, { }, context) {
  return await new Promise((resolve, reject) => {
    PassivoService.getPassivos({})
      .then(content => {
        resolve(content)
      })
      .catch(reject)
  })
}

module.exports = listaPassivos
