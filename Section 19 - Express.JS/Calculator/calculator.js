//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express(); //setting up a new app using the express module
//express works with body parser directly as well
//There are a few modes of bodyParser one of them is bodyParser.text() this converts all the post request data into text format
//bodyParser.json(), this converts all the post request data into json format but when we are working with forms and want to use data sent
//using forms we are going to use bodyParser.urlencoded(), now one of the option which bodyParser requires us to explicitly declare is the extended option
//extended:true basically allows us to post nested objects, generally we don't use them but bodyParser requires us to explicitly declare this option
app.use(bodyParser.urlencoded({extended:true}));

//Now what happens when we use body parser is that we are able to use request.body in any of our routes, requests.body is nothing but the parsed version of our http requests
//it can then be accessed just like and normal javascript object by utilising the names that we had earlier put ex num1, num2

app.get("/", function(req, res)
{
  // res.send("Hello World!");
  res.sendFile(__dirname + "/index.html");

  //no matter where our website is located with __dirname we can directly get the name of the directory
  //__dirname + "/index.html" will provide us with the exact path of our index.html file

  //Generally when we serve the website on our own computer what happens is that we use relative file paths and that can work in cloud as well
  //however to stay just a bit cautious we use __dirname , this will tell us the exact path of our directory even if we host in on the cloud
  //or basically on someone else's computer
});
app.post("/", function(req, res)
  {
    // console.log(req.body);
    var num1 = Number(req.body.num1);//If we don't use Number then it will consider the req.body.num1 as strings and will concatenate it with num2
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
  // res.send("Thanks for posting")
    res.send("The sum of " + num1 + " and " + num2 + " is " + result);
});//This handles the post requests

app.get("/bmiCalculator", function(req, res)
{
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator", function(req, res)
{
  var height = parseFloat(req.body.height);
  var weight = Number(req.body.weight);

  var result = weight/(height*height);
  res.send("Your BMI is " + result);
});
app.listen(3000, function()
{
  console.log("Server running on port 3000");
});


//To work with the data sent using the post requests we make use of a npm package body parser, this can be installed using
//npm install body-parser and it helps us work with the data sent in the post requests.


//One of the major advantages of having a server is that our code is hidden from the users of our application and when we do view page source only the html of the page is
//visible to the user and nothing else as all our JavaScript is being run on the backend and hence it is hidden and also the workload of executing the javaScript is not on
// the user rather it is on the servers and hence websites can deliver much faster results due to the backend execution of code rather than frontend code execution
