//import express framework
const express = require('express')
const upload = require('./upload')

//initialize express
const app = express()

//setup view engine
app.set('view engine', 'ejs')

//Set a static folder
app.use(express.static('public'))

//request route
app.get('/', (req, res)=>{
    res.render('index')
})

//route to handle image upload
app.post('/upload', (req,res)=>{
    upload(req,res, (err)=>{
        if (err){
            console.log(err)
            res.render('index', {msg: err})
        }else{
            res.render('index', {file: 'images/' + req.file.filename})
        }
    })
})

//Define the port number
const PORT = 7000

app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`)
})

