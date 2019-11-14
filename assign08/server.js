var http = require('http');
var fs = require('fs');


function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error, data){
        if(error){
            response.write(404);
            response.write('File not found');
        } else{
            response.write(data);
        }
        response.end();
    });
    
   
}

// listen to the port 8000 (run in this port)
http.createServer(onRequest).listen(8000);