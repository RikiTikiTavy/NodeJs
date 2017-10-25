var express = require('express');
var app = express();
var port = 8181;
app.use(express.static(__dirname+'/static'));
app.get('/', function (req, res) {
  res.sendFile(__dirname+"/index.html");
});
app.listen(port, function (){
  console.log('Server started '+port);
});
