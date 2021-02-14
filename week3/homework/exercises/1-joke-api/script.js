/**
 * 1. Chuck Norris programs do not accept input
 * 
 * `GET` a random joke inside the function, using the API: http://www.icndb.com/api/
 * (use `node-fetch`) and print it to the console. 
 * Make use of `async/await` and `try/catch`
 * 
 * Hints
 * - To install node dependencies you should first initialize npm
 * - Print the entire response to the console to see how it is structured.
 */
const fetch = require('node-fetch');
const express = require('express')
const app = express();

function printChuckNorrisJoke() {
  // YOUR CODE GOES IN HERE
  app.get('/', async (req, res) => {
    try{
      res = await fetch('http://api.icndb.com/jokes/random');
      const randomJoke = await res.json();
      console.log(randomJoke.value.joke);
    } catch (error){
      console.log(error);
    }
  });
}

app.listen(3000);
printChuckNorrisJoke();

