const express = require('express')
const path = require('path')

const app = express()

//app.use(function(req, res, next) {
  //  console.log('Hello from middleware')
  //  next() 
//})

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname) + '/index.html')
})

app.use(function(req, res, next) {
    console.log('Hello from middleware')
    next() 
})

app.get('/signup',(req,res,next) => {
    res.sendFile(path.join(__dirname) + '/signup.html')
})

app.use(function(req, res, next) {
    console.log('Bye from middleware')
    next()
})

app.post('/signup',(req,res) => {
    res.send("Signup Successful") 
})


app.listen(8080,() => console.log("Server running on port 8080"))