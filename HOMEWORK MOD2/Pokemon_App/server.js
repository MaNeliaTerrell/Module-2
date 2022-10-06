const express = require('express')

const app = express();
const PORT = 3000

app.get('/', function(req, res) {
    console.log(req.params);
    res.send('Welcome to the Pokemon App')
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);

})
