//https://www.youtube.com/watch?v=foUHJo8ZTu0
var movies = require('./movies');

var buckysMovies = movies();
buckysMovies.favMovie="Good Will Hunting";
console.log("Bucky's favourite movie is: " + buckysMovies.favMovie);