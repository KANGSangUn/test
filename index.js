const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('나는 너를 사랑해~')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})