var http = require('http')

http.createServer( function (req,res) {
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write('<b>helloo</b>')
    res.end('Hello World!')
}).listen(8080)

// include module -> require
// tsc 'typescript_name' -> ts to js
//