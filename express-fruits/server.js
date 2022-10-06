const express = require('express');
const morgan = require('morgan')
const fruits = require('./models/fruits');
const vegetables = require('./models/vegetables');
const vegetablesArray = require('./models/vegetables')
require('dotenv').config()
// console.log(process.env.MONGO_URI);
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const Fruit = require('./models/FruitModel')


//  App init
const app = express();
const PORT = 3000

// Middleware
app.use(morgan('dev'))

//We need this middleware to read the data from the post requests

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

// Create your own middleware

app.use((req, res, next) => {
    console.log('I run for all routes');
    next()
})

// app setttings

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ======= Routes for Fruits


app.get('/', (req, res) => {
    // res.send('welcome');
});

// Index Route: get all fruits (array)
app.get('/fruits', (req, res) => {
    // res.send(fruits)

// FIND all documents in DB

    Fruit.find({}, (error, fruitsfromDB) =>{
        if(error){
            console.log(error);
        }
        console.log(fruitsfromDB);
        res.render('fruits/Index', { fruits: fruitsfromDB })
    })
    
})
// ========CREATE ==============
// Take in the data from create new fruit
app.post('/fruits', (req, res) => {
    // console.log(req.body);
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    // fruits.push(req.body)

    // Using the model to create a new resource on the db
    Fruit.create(req.body, (error, createdFruit) =>{
        if(error){
            console.log(error);
        }
        console.log(createdFruit)
        res.redirect('/fruits')
    })
    
    
})

// Render a Form

app.get('/fruits/new', (req, res) => {
    res.render('fruits/New')
})

// ================READ BY ID ===================
// Show route  : show a single fruit or the array
app.get('/fruits/:id', (req, res) => {
    const { id } = req.params
    
    // res.send(fruits[indexOfFruitsArray]);

    Fruit.findById(id,(error, foundFruit) => {
        if(error){
            console.log(error);
        }
    // send the view with the data found on the db
        res.render("fruits/Show", {
            fruit: foundFruit,
            // date: new Date().getFullYear()
        })  
    })

});

app.delete('/fruits/:id', (req, res) =>{
    const {id} = req.params;
    // console.log('deleting...');

    // DELETE THE FRUIT FROM DB
    Fruit.findByIdAndRemove(id, (error, data) => {
        console.log(data);
        if (error){
            console.log(error);
            res.status(403).send('Bad Request')
        }
        res.redirect('/fruits')
    })
})

app.get('/fruits/:id/edit', (req, res) => {
    const {id} = req.params
    // Find the fruit in the db using the id
    Fruit.findById(id, (error, foundFruit) => {
        if(error){
            console.log(error);
            res.status(403).send('ID not found')
        }
        // Render the view and pass the data from the fruit
        res.render('fruits/Edit', {fruit: foundFruit})
    })
    
})

app.put('/fruits/:id', (req, res) => {
    const {id} = req.params
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.findByIdAndUpdate(id, req.body, (error, updatedFruit) => {
        if (error){
            console.log(error);
            res.status(403).send("Cannot update")
        }
        res.redirect(`/fruits/${id}`)
    })
})


// ====== Routes for Vegetables

app.get('/vegetables', (req, res) => {
    res.render('vegetables/Index', { vegetables: vegetablesArray })
})


// Take in the data from create new vegetable
app.post('/vegetables', (req, res) => {
    console.log(req.body);
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    vegetables.push(req.body)
    res.redirect('/vegetables')
    // res.send('Hi')
})

// Render a Form for NEW Vegetable

app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New')
})

app.get('/vegetables/:indexOfVeggies', (req, res) => {
    const { indexOfVeggies } = req.params
    res.render('vegetables/Show', { vegetable: vegetablesArray[indexOfVeggies] })
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);

    mongoose.connect(process.env.MONGO_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    });
    mongoose.connection.once('open', ()=> {
        console.log('connected to mongo');
    });
})


