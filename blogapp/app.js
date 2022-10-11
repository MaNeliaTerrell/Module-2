const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
require('dotenv').config()

const app = express()
const PORT = 3000

app.use(morgan('dev'))
app.use(express.json());

app.use('/blog', require('./controllers/BlogRouter'))


app.get('/', (req, res) => {
    res.send('Marinel\'s Blog')
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

