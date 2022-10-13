const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const methodOverride = require('method-override')
require('dotenv').config()
const path = require('path')


const app = express()
const PORT = 3000

app.use(express.static('public'))

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// App settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.use('/blog', require('./controllers/BlogRouter'))
app.use('/user', require('./controllers/newUserRouter'))

// app.get('/', (req, res) => {
//     res.send('Marinel\'s Blog')
// }) 

app.get('/', (req, res) => {
  res.render('pages/HomePage')
}) 

app.listen(PORT, () => {
   console.log(`Server running on port: ${PORT}`);

// Connect to Mongoose

   mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

// Confirm we have a connection to MongoDB

  mongoose.connection.once("open", () => {
    console.log("connected to mongo");
  });

});

