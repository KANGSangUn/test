import express from 'express'
const app = express()
  
app.get('/', function (req, res) {
  res.send('まじかよ')
});
  
app.listen(80)