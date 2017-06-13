//https://www.youtube.com/watch?v=_cnJcXwwQRA
//var fs = require('fs');

//fs.writeFileSync("corn.txt", "Corn is good");
//console.log(fs.readFileSync("corn.txt").toString());

var path = require('path');
var websiteHome = "Desktop/Niall//thenewbotson/index.html";
var websiteAbout = "Desktop/Niall//thenewbotson/about.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));