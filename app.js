const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const queries = require('./queries')
const port = parseInt(process.env.PORT || 9000)


app.use(cors())
app.use(bodyParser.json())
app.use(morgan('short'))

app.get('/', (request, response) => {
  queries.getCohorts()
  .then(students => response.json({students}))
})

app.get('/:id', (request, response, next) => {
  queries.getId(request.params.id)
  .then(student => {
    response.json(student)
  })
  .catch(next)
})

app.post('/', (request, response, next) => {
  queries.createStudent(request.body)
  .then(student => {
    response.status(201).json({student})
  })
  .catch(next)
})

app.put('/:id', (request, response, next) => {
  queries.updateStudents(request.params.id, request.body).then(students => {
      response.json({'students': students[0]});
  })
})

app.delete('/:id', (request, response, next) => {
  queries.deleteStudent(request.params.id)
  .then(() => response.sendStatus(204))
})



app.listen(port, () => {
console.log(`Listening on Port ${port}`)})