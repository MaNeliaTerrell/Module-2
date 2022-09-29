// load modules
const express = require('express')

// init express app
const app = express()
const PORT = 3000

// DATA
const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter"];

// Routes
app.get('/', (req, res) => {
    console.log(req.params);
    res.send('<h1>Welcome to Express Plants</h1>')
})

app.get('/plants', (req, res) => {
    res.send('Plants route')
})

app.get('/plants/:indexOfPlantsArray', (req, res) => {
    const {indexOfPlantsArray} = req.params;
    // console.log(req.params)
    // console.log(req.params.indexOfPlantsArray)
    res.send(plants[indexOfPlantsArray])
})

app.get('/fixed/:indexOfPlantsArray', (req, res) => {
    const {indexOfPlantsArray} = req.params

    if (plants[indexOfPlantsArray]){
        res.send(plants[indexOfPlantsArray])
    } else {
        res.send('Cannot find that index: ' +  indexOfPlantsArray)
    }
})

// Query Parameters

const dbUser = ['colton', 'abe', 'deja', 'chris']

app.get('/search/:username', (req, res) => {
    const { username } = req.params
    console.log(req.params);
    console.log(req.query);

    for(let user of dbUser) {
        console.log(user)
        if(user === username){
            console.log(username);
        res.send(`Welcome ${username}`)
    }else{
        console.log('User Not Found');
        // res.send('User Not Found')
    }
    }
})

// /howdy/Nelia?title=dev
// http://localhost:3000/howdy/Nelia?title=dev&hobby=art

app.get('/howdy/:firstname', (req, res) => {
    console.log(req.params);
    console.log(req.query);
})


app.get('/:color', (req, res)=> {
    res.send(req.params.color)
})

app.get('/hello/:firstname/:lastname', (req, res) => {
	console.log(req.params);
    const {firstname, lastname} = req.params
	res.send(`Hello ${firstname} ${lastname}`)
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})



