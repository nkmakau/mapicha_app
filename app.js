//import express framework
const express =require('express')
const { response } = require('express')

//initialize express
const app = express()

//Route to index page
app.get('/', (req, res)=>{
    response.send('<h1> Welcome to Mapicha App</h1>')
})

//Define the port number
const PORT = 7000

app.listen(PORT, function() {
    console.log(`Server is listenining on port ${PORT}`)
})

