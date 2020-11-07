const dotenv = require('dotenv').config()
const uri = require('mongodb-uri')

const { MongoClient } = require('mongodb')

class Database {
  constructor() {
    this.uri =
      process.env.NODE_ENV === 'test'
        ? process.env.MONGO_URL
        : uri.format({
            username: process.env.APP_DATABASE_USERNAME,
            password: process.env.APP_DATABASE_PASSWORD,
            hosts: [
              {
                host: process.env.APP_DATABASE_HOST,
                port: process.env.APP_DATABASE_PORT
              }
            ],
            database: process.env.APP_DATABASE_NAME
          })
  }

  async start() {
    try {
      const connection = await MongoClient.connect(this.uri, { useNewUrlParser: true, useUnifiedTopology: true })

      global.mongodbConnection = connection

      global.mongodb = await connection.db(process.env.APP_DATABASE_NAME)

      console.log('MongoDB Started')

      return await global.mongodb
    } catch (e) {
      console.error(e)
    }
  }

  async getDB() {
    try {
      return global.mongodb || this.start()
    } catch (e) {
      console.error(e)
    }
  }

  isStarted() {
    return !!global.mongodb
  }

  async stop() {
    try {
      global.mongodb = undefined
      console.log('MongoDB Stopped')
      await global.mongodbConnection.close()
      return (global.mongodbConnection = undefined)
    } catch (error) {
      console.log(error)
    }
    
  }
}

module.exports = new Database()
