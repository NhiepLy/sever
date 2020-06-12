const express = require('express')
const app = express()
var path = require('path')
var anh= path.join(__dirname,'./public')
app .use('/hinhanh', express.static(anh))
app.get('/me', function(req,res){

  var filehtml = path.join(__dirname,'sever.html')
  res.sendFile(filehtml)
})
app.listen(3000)