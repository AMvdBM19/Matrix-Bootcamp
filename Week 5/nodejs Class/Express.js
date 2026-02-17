const express = require('express')
const app = express()

app.listen(3000, ()=>{console.log("Server on port 3000")})

//app.get('/home',(req,res)=>{console.log(req.url , req.method)})

app.get('/home',(req,res)=>{
    res.send('Hello')
})

app.get('/about',(req,res)=>{
    res.json('About')
})

app.get('/contact',(req,res)=>{
    res.redirect('/home')
})

app.get('/html',(req,res)=>{
    res.status(200).sendFile('./index.html' ,{root:__dirname})
})

app.get('/home1',(req,res , next)=>{
    console.log('in middleware')
    next()
},(req,res)=>{
    res.send('Hello')
})