const express = require('express')
const pokemonArr = require('./Models/pokemon')
const pokemon = require('./Models/pokemon')


const app = express();
const PORT = 3000


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ROUTES

app.get('/', function(req, res) {
    res.send('Welcome to the Pokemon App')
})


app.get('/pokemon', (req, res)=>{
    res.render('Index', { pokemon: pokemonArr });
});

app.get('/pokemon/:id', (req, res)=>{
    // const {id} = req.params
    res.send(req.params.id)
    // res.render('Show', { pokemon: pokemonArr[pokemon] })
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);

})

