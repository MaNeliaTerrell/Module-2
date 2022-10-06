const mongoose = require('mongoose');

// Create a New Schema (blueprint)
const fruitSchema = new mongoose.Schema({
    name:  { 
        type: String, 
        required: true 
    },
    color:  { 
        type: String, 
        required: true 
    },
    readyToEat: Boolean
});

// Create a new model with the schema
const Fruit = mongoose.model('Fruit', fruitSchema)

module.exports = Fruit
