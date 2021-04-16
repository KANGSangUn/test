import express from 'express'
const app = express()
  
app.get('/', function (req, res) {
  res.send('できた？')
});
  
app.listen(80)