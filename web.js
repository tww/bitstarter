var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

     fs.readFile('index.html', function (err, data) {
         if (err) throw err;
         
         response.send(data.toString('utf8', 0, data.length);

//         response.send('Hello World2!');
     }); 
   
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
