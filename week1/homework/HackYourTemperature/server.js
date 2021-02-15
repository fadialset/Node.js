const express = require('express');
const exphbs = require('express-handlebars');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false }));

app.get('/',(req,res)=>{
    res.render('index');
});
app.post('/weather',(req,res)=>{
    const cityName = req.body.cityName
    res.send(cityName);
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log('server is working'));