//jshint esversion:6
//the above line tells the linter that we are using version 6 of js

const express = require("express");
const app = express(); //generally app word is used to initialize express and create its object

// app.get("/", function(request, response)
// {
//   console.log(request);
// });

//.get function is provided by express and it has two parameters first specifies where the request is being made in our case the request is being made at the root of our website so we specify / and
// the second parameter is the callback function which has two parameters first is the request and second is the response
//response parameter specifies the response that our server gives to the browser.

// app.get("/", function(request, response)
// {
//   response.send("Hello, I am Hridyansh Pareek");
// });


//Generally we use req for request and res for response

app.get("/", function(req, res)
{
  res.send('<h1 style = "color:#EAF6F6;">Hridyansh Fucking Pareek</h1>')
});
app.listen(3000, function()
{
  console.log("Server running on port 3000");
});//listens to http requests on port 3000 app.listen(3000); just listens on port 3000 and we don't see any messages when our server runs however if we add a callback function example here then that function will get executed when server starts on port 3000
