const express = require('express');
const expressHandelbars = require('express-handlebars');
const axios = require('axios');

const app = express();

app.get('/',(req,res)=>{
    res.send('hello from backend to frontend!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log('server is working'));