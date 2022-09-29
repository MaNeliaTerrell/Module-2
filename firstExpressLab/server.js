// Require expressand set the app

const express = require('express')

const app = express()
const PORT = 3000

// Greetings
// Make a route '/greeting'that sends a generic greeting to the screen like "Hello, stranger".


app.get('/', function(req, res) {
    console.log(req.params);
})

app.get('/greeting/:name', (req, res) => {
	console.log(req.params);
    const {name} = req.params

	// res.send(`Hello ${name}`)
    // res.send(`What's up, ${name}`)
    res.send(`${name}! It's so great to see you!`)
})


app.listen(3000, function() {
    console.log('Listening on port 3000');
});



