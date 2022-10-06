// Require express and set the app

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

//  Magic 8 Ball

/*Create a route of '/magic' that should expect a phrase in the URL that ask the Magic 8 ball a question.

So if the user hits that route and asks a question of "Will I be a Millionaire" (ex. '/magic/Will%20I%20Be%20A%20Millionaire') he should have return to him his question AND a random Magic 8 ball response (see the array below) on the screen.

We can't use spaces in the url, so we use %20 to express a space in the url.

So if the user hits that route and asks a question of "Will I be a Millionaire" he should get his question asked and a random Magic 8 ball quote on the screen.

Send the magic 8 ball response back between html <h1> tags */

const magic8Array = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic', (req, res) => {
    console.log('Magic');
})


app.get('/magic/:question',(req, res) => {
    const { question } = req.params
    let answer = magic8Array[(Math.floor(Math.random() * magic8Array.length))]
    res.send(`<h1>${question} : Magic 8 Ball says, ${answer}</h1>`)
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);

})
