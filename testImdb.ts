import { Imdb } from "./Imdb";
import { Movie } from "./movie";
import { Professional } from "./professional";

const fs = require('fs');

let movie1 = new Movie("Intocable", 2014, "France", "Dranma");
let movie2 = new Movie("Intocable", 2014, "France", "Dranma");
let movie3 = new Movie("Intocable", 2014, "France", "Dranma");
let movie4 = new Movie("Intocable", 2014, "France", "Dranma");

let imdb1 = new Imdb([movie1, movie2, movie3, movie4])

// console.log(JSON.stringify(imdb1));

let objson = JSON.stringify(imdb1);

fs.writeFileSync("imdbBBDD.json", objson);
let imdbJson = new Imdb([]);

imdbJson = JSON.parse(fs.readFileSync("./imdbBBDD.json"))

console.log(imdbJson)