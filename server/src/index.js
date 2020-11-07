require('dotenv').config()

const app = require('./app')
const graphqlServer = require('./graphql/server')
const { APP_SERVER_PORT } = process.env

graphqlServer.applyMiddleware({ app })

app.listen(APP_SERVER_PORT, () => {
  console.log(`Server is up and running on http://localhost:${APP_SERVER_PORT}`)
  console.log(`Go to http://localhost:${APP_SERVER_PORT}/graphql to run queries!`)
})
