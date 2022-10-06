const express = require('express')
const pokemon = require('./Models/pokemon')

const app = express();
const PORT = 3000

app.get('/', function(req, res) {
    console.log(req.params);
    res.send('Welcome to the Pokemon App')
})

app.get('/pokemon', function(req, res) {
    console.log(req.params);
    res.send('pokemon')
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);

})
