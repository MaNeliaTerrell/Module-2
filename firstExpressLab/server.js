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
    // res.send(`${name}! It's so great to see you!`)
})

// Tip Calculator
// our app should have a route of '/tip' and it should expect 2 params. One should be total and one should be tipPercentage.
// When hitting the route, the page should display how much your tip will be based on the total amount of the bill and the tip percentage. (ex. hitting '/tip/100/20' should display 20 on the page).

app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log(req.params);
    const {total, tipPercentage} = req.params
    let tip = total * (tipPercentage/100)
    tip = tip.toFixed(2)
	console.log(`${tip}`);
    res.send(`${tip}`)
    
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);

})
