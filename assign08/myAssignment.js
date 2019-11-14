var http = require('http'); 

var server = http.createServer(function onRequest(req, res) { 
    if (req.url == '/home') { 
       
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write('<html><h1>Welcome to the Home Page</h1></html>');
        res.end();

    } else if (req.url == '/getData') {

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.write(JSON.stringify({
            "name": "Leo Coelho",
            "class": "CS-313"
        }));
        res.end();

    } else{
        res.writeHead(400, {
            'Content-Type': 'text/html'
        });
    res.write('404 - Page Not Found');
    res.end();
    }
});

server.listen(8000); 

