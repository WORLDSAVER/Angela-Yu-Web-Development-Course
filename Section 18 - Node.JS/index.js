//jshint esversion:6

//The above line tells JS Hint in atom that the current version of JS we are using is V6 and that const is
// part of the V6

const fs = require("fs"); //File System module of Node

fs.copyFileSync("file1.txt", "file2.txt");

//By using the nodejs.org/api website we are able to use the code that the node team have written in house

//clear command can be used to clear the command line

const superheroes = require("superheroes");

console.log(superheroes.all);
console.log(superheroes.all.length);

var superhero_name = superheroes.random();

console.log(superhero_name);


const supervillains = require("supervillains");

console.log(supervillains.all);
console.log(supervillains.all.length);

var supervillain_name = supervillains.random();

console.log(supervillain_name);

// packages can be used to use prewritten code to help us build useful components, ex if we are building
// a house and we want to install trees inside the house then instead of making trees from the ground up 
// we can directly use pre made trees to save a lot of work.

//.json files are just a clean way of organising data, the data in jsons is almost like JavaScript obje
// cts