"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    Movie.prototype.printAll = function () {
        console.log("\n Title - " + this.title +
            "\n Release Year - " + this.releaseYear +
            // "\n Actors - " + this.actors +
            "\n Nacionality - " + this.nacionality +
            // "\n Director - " + this.director +
            "\n Lenguage - " + this.lenguage +
            "\n Plataforma - " + this.plataforma +
            "\n isMCU - " + this.isMCU +
            "\n Main Character Name - " + this.mainCharacterName +
            "\n Producer - " + this.producer +
            "\n Distributor - " + this.distributor +
            "\n Genre - " + this.genre);
    };
    return Movie;
}());
exports.Movie = Movie;
