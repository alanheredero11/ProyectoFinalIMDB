import { Movie } from "./movie"
import { Professional } from "./professional";


export class Imdb
{
    public movies: Movie[];

    constructor(movies: Movie[])
    {
        this.movies = movies;
    }
}   