//import express framework
const express = require('express')

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

//Define the port number
const PORT = 7000

app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`)
})

