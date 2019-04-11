const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schemas')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true // tool to use
}))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))