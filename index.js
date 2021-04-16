const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('~영원히 함께 할꺼야~')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})