import express from 'express';
import dotenv from 'dotenv'

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT ,() => {
    console.log(`server Running on port : ${PORT} ` );
})


app.get('/', (req, res) =>{
    // root route for http://localhosr:5000 
    res.send('server is listening ??? ');
})