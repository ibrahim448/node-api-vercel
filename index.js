const express = require('express')
const app = express()
const port = 3000
const cors = require("cors");

app.use = (cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/news', (req, res) => {
  res.send('News!')
})
app.get('/categories', (req, res) => {
  res.send('All Categories')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})