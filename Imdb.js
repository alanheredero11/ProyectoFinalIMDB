"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var fs = require('fs');
var Imdb = /** @class */ (function () {
    function Imdb(movies) {
        this.movies = movies;
    }
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var objson = JSON.stringify(this.movies);
        fs.writeFileSync(nombreFichero, objson);
    };
    Imdb.prototype.obtenerInstanciaIMDB = function (nombreFichero) {
        var imdbJson = new Imdb([]);
        imdbJson = JSON.parse(fs.readFileSync(nombreFichero));
        return imdbJson;
    };
    return Imdb;
}());
exports.Imdb = Imdb;
