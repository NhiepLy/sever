const express = require('express')
const app = express()
app.get('/name/:login/:password', function(req,res){
  var log = parseInt (req.params.login)
  var pas = parseInt (req .params.password)
  res.json(log + pas )
})
app.listen(2000)