//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class TVShows {
  constructor(name, length, genre, rating) {
    this.name = name;
    this.length = length;
    this.genre = genre;
    this.rating = rating;
  }

  play() {
    console.log("Playing show");
  }

  bookmark() {
    console.log("Added to list");
  }

  stop() {
    console.log("stop");
  }
}
