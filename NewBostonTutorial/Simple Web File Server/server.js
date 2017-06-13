//https://www.youtube.com/watch?v=_D2w0voFlEk

var http = require('http');
var fs = require('fs');

//404 Response
function send404(response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404: Page not found! Uh Oh");
    response.end();
}

//Handle a user request
function onRequest(request, response){
    //The '/' means the homepage
    if(request.method == 'GET' && request.url == '/'){
        response.writeHead(200, {"Content-Type": "text/html"});
        //sends out response through pipe
        fs.createReadStream('./index.html').pipe(response);
    }
    else{
        send404(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running...");