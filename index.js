import express from 'express'
const app = express()
  
app.get('/', function (req, res) {
  res.send('ss')
});
  
app.listen(80)