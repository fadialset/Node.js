
/**
 * 2. Authentication
 * 
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */
const express = require('express');
const fetch = require('node-fetch');
const app = express();

function printBooks() {
  // YOUR CODE GOES IN HERE
  app.get('/', async (req, res) => {
    try{
    res = await fetch(' https://restapiabasicauthe-sandbox.mxapps.io/api/books', {
    headers: { 'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ==' }
  })
      const response  = await res.json();
      console.log(response);
    } catch (error){
      console.log(error);
    }
  });
}

app.listen(3000)
printBooks();