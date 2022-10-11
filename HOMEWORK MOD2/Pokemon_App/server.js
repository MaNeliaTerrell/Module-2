const express = require('express')
const pokemonArr = require('./Models/pokemon')
const pokemon = require('./Models/pokemon')


const app = express();
const PORT = 3000


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', function(req, res) {
    res.send('Welcome to the Pokemon App')
})

// app.get('/pokemon', function(req, res) {
//     console.log(req.params);
//     res.send("Index")
// })

app.get('/pokemon', (req, res)=>{

    
    res.render('Index', { pokemon: pokemonArr });

});


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);

})

