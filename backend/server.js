const express = require('express');

const app = express();

app.listen(5000 ,() => {
    console.log(`server Running on port 5000 `);
})


app.get('/', (req, res) =>{
    // root route for http://localhosr:5000 
    res.send('server is listening ??? ');
})