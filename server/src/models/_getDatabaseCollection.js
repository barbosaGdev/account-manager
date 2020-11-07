const db = require('../config/Database')

module.exports = getDatabaseCollection = collectionName => {
  return async function() {
    try {
      const database = await db.getDB()
      return await database.collection(collectionName)
    } catch (error) {
      console.log(error)
    }
  }
}
