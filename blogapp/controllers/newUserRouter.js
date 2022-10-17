const express = require('express')
const userModel = require('../models/UserSchema')
const bcrypt = require('bcryptjs')

const router = express.Router()


// GET: ALL BLOGS
router.get('/', async (req, res) => {
    try {
        const users = await userModel.find({})
        res.send(users)

    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot Get')
    }
})

// // GET: Blog by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const user = await userModel.findById(req.params.id)
//         res.send(user)
//     } catch (error) {
//         console.log(error);
//         res.status(403).send('Cannot get')
//     }
// })

// Render a Signup Form

router.get('/signup', (req, res) =>{
    res.render('Users/Signup')
})

// POST:  CREATE a NEW BLOG

router.post('/signup', async (req, res) => {
    try {
        // to check if user already exists
        const userAlreadyExists = await userModel.find({email: req.body.email})
        console.log(userAlreadyExists);
    
    if(userAlreadyExists[0]) {
       return res.send("User Already Exists!");
    }

        // Create a new user
        const SALT = await bcrypt.genSalt(10)
        // reassign the password to the hash
        req.body.password = await bcrypt.hash(req.body.password, SALT)
        const newUser = await userModel.create(req.body)
        res.send(newUser)
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot create')
    }
})

//  PUT:    UPDATE BY ID

router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument': "after"})
        console.log(updatedUser);
        res.send(updatedUser)
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot put')
    }
})

// DELETE

router.delete ('/:id', async (req, res) => {
    try {
        // create a variable to show which account was deleted
        const deletedUser = await userModel.findByIdAndRemove(req.params.id)  
        res.send(deletedUser)
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot delete')
    }
})

module.exports = router