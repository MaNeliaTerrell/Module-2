//  load the express framework
const express = require('express')

//  create an instance of an express app

const app = express()

// THe root route

app.get('/', function(request, response){
    response.send('<h1>Hello Express!<h1>')
})

app.get('/posts', (req, res) => {
    res.send('<h3>Welcome to the Server</h3>')
})

app.get('/home', (req, res) => {
    res.send('<h1>Home Page</h1>')
} )

app.listen(3000, function(){
    console.log('Server listening in port: 3000');
})