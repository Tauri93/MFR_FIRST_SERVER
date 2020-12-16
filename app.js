const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from 4myson.fr!')
})

app.get('/Home', (req, res) => {
  res.send('Hello from Home of 4myson.fr!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
