const express = require('express');
const exphbs = require('express-handlebars');
const axios = require('axios');
const API_KEY = require('./sources/keys.json').API_KEY;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.get('/',(req,res)=>{
   res.render('index',{ header : 'Welcome To  Weather App'});
});
app.post('/weather',(req,res) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&APPID=${API_KEY}&units=metric`)
    .then(function (response) {
      res.status(200).render('index',{header : 'Welcome To  Weather App', 
                                      cityTemp : `The Temperature In : ${req.body.cityName}, Is : ${response.data.main.temp} °C!`,
                                      feelsLikeTemp : `Feels Like : ${response.data.main.feels_like} °C!`,
                                      weatherDescription : `Weather Description : ${response.data.weather[0].description}.`,
                                      windSpeed : `Wind Speed : ${response.data.wind.speed} Meter/Sec.`,
                                      countryName : `Country Name : ${response.data.sys.country}.`});
    })
    .catch(function (error) {
      res.status(404).render('index',{header : 'Welcome To My Weather App',
                                      cityTemp: "City is not found!",
                                      feelsLikeTemp : ``,
                                      weatherDescription : ``,
                                      windSpeed : ``,
                                      countryName : ``});
      if(req.body.cityName == ''){
          res.status(400);
      }
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log('server is working'));