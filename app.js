const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const queries = require('./queries')
const port = parseInt(process.env.PORT || 3000)


app.use(cors())
app.use(bodyParser.json())

app.get('/', (request, response) => {
  queries.getCohorts()
  .then(students => response.json({students}))
})

app.get('/:id', (request, response) => {
  queries.getId(request.params.id)
  .then(student => {
    response.json(student)
  })
})

// app.use((error, request, response, next) => {
//  console.error('ERROR', error)
//  response.status(404).send()
// })

app.listen(port, () => {
console.log(`Listening on Port ${port}`)})