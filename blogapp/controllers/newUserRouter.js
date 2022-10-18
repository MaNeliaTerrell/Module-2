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
        res.redirect('/user/signin')
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot create')
    }
})

// Render the Sign In Form

router.get('/signin', (req, res) =>{
    res.render('Users/Signin')
})

//  Sign in as User

router.post('/signin', async (req, res) => {
    try {
        // find user by email
        const user = await userModel.findOne({email: req.body.email})
        if (!user) return res.send('Please check your email and password!')
        // check if passwords match
        const decodedPassword = await bcrypt.compare(req.body.password, user.password)
    if (!decodedPassword) return res.send('Please check your email and password!')
    
    // set the user session
    // create a new username in the session obj using the user info from db
    req.session.username = user.username
    req.session.loggedIn = true
        // redirect to /blogs
        res.redirect('/blog')
    } catch (error) {
        console.log(error);
    }
})

// Sign out User and Destroy Session

router.get('/signout', (req, res) => {
    try {
      req.session.destroy()
      res.redirect('/')
    } catch (error) {
      console.log(error);
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