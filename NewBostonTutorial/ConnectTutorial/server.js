//https://www.youtube.com/watch?v=54aol-U_1es

var connect = require('connect');
var http = require('http');

var app = connect();

function profile(request, response){
    console.log('User requested profile');
}

function forum(request, response){
    console.log('User requested forum');
}

app.use('/profile', profile);
app.use('/forum', forum);

/*
//middleware
function doFirst(request, response, next){
    console.log("Bacon");
    //next();
}

function doSecond(request, response, next){
    console.log("Tuna");
    next();
}

app.use(doFirst);
app.use(doSecond);
*/

http.createServer(app).listen(8888);
console.log("Server is running...");