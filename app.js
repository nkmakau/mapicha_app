//import express framework
const express = require('express')

//initialize express
const app = express()

//Set a static folder
app.use(express.static('public'))

//Define the port number
const PORT = 8000

app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`)
})

