

export class Movie
{
    public title: string;
    public releaseYear: number;
    // public actors: Professional[];
    public nacionality: string;
    // public director: Professional; 
    public lenguage: string; 
    public plataforma: string; 
    public isMCU: boolean; 
    public mainCharacterName: string;
    public producer: string; 
    public distributor: string;
    public genre: string;

    constructor(title: string, releaseYear: number, nacionality: string, genre: string)
    {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;

    }

    public printAll()
    {
        console.log(
                    "\n Title - " + this.title +
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
    }
}
