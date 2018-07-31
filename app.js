const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = parseInt(process.env.PORT || 3000)


app.use(cors())
app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.send('Hello World')
})

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
})



app.listen(port, () => {
console.log(`Listening on Port ${port}`)})
