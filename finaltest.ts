import { Professional } from "./professional";
import { Movie } from "./movie";
import { Imdb } from "./Imdb";

const input = require('readline-sync');

let professional1 = new Professional("", 0, 0, 0, true, "", 0, "");

professional1.name = input.question("Enter name of the professional: "); 
professional1.age = input.question("Enter age of the professional: ");  
professional1.weight = input.question("Enter weight of the professional: ");  
professional1.height = input.question("Enter height of the professional: ");  
professional1.isRetired = input.question("Enter isRetired of the professional: ");  
professional1.nationality = input.question("Enter nationality of the professional: ");  
professional1.oscarsNumber = input.question("Enter oscarsNumber of the professional: ");  
professional1.profession = input.question("Enter profession of the professional: ");  

let movie1 = new Movie("Intocable", 2014, "France", "Dranma");
let movie2 = new Movie("Intocable", 2014, "France", "Dranma");
let movie3 = new Movie("Intocable", 2014, "France", "Dranma");
let movie4 = new Movie("Intocable", 2014, "France", "Dranma");

let imdb1 = new Imdb([movie1, movie2, movie3, movie4]);

imdb1.obtenerInstanciaIMDB("imdbBBDD.json");
imdb1.movies[1].director = professional1;
imdb1.escribirEnFicheroJSON("imdbBBDD.json")

console.log(imdb1);
