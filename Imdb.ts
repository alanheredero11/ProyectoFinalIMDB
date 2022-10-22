import { Movie } from "./movie"
import { Professional } from "./professional";
const fs = require('fs');

export class Imdb
{
    public movies: Movie[];

    constructor(movies: Movie[])
    {
        this.movies = movies;
    }

    public escribirEnFicheroJSON(nombreFichero: string)
    {
        let objson = JSON.stringify(this.movies)
        fs.writeFileSync(nombreFichero, objson)
    }

    public obtenerInstanciaIMDB(nombreFichero: string):Imdb {
        
        let imdbJson = new Imdb([]);
        imdbJson = JSON.parse(fs.readFileSync(nombreFichero));
        return imdbJson;
    }
}   