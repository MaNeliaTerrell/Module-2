const express = require('express')
const pokemonArr = require('./Models/pokemon')
const pokemon = require('./Models/pokemon')
const morgan = require('morgan')


const app = express();
const PORT = 3000


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ROUTES

app.get('/', function(req, res) {
    res.send('Welcome to the Pokemon App')
})

// INDEX

app.get('/pokemon', (req, res)=>{
    res.render('Index', { pokemon: pokemonArr });
});

//  SHOW
app.get('/pokemon/:id', (req, res)=>{
    const { id } = req.params
    // res.send(req.params.id)
    res.render("Show", { pokemon: pokemonArr[id]})
});

// NEW



app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);

})

