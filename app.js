//import express framework
const express = require('express')

let indexRouter = require('./routes/index')

//initialize express
const app = express()

//setup view engine
app.set('view engine', 'ejs')

//Set a static folder
app.use(express.static('public'))

//Define the index Router
app.use('/', indexRouter)

//Define the port number
const PORT = 7000

app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`)
})

