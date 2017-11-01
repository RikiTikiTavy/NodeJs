var express = require('express');
var app = express();
var port = 8181;
var proxy = require('express-http-proxy');
var date = require('node-datetime');
var moment = require('moment');

app.use(express.static(__dirname + '/node_modules/jquery/dist'));
app.use( express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use(express.static(__dirname+'/dist'));

moment.locale('ru');
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    var dat = date.create();
    var format = moment().format('DD MMMM YYYY');
    res.render(__dirname+'/dist/views/index', {
        time: format
    });
});



app.get('/logo.png', function(req, res) {
    request.get("http://www.aisa.ru/images/round_logo@2x.png").pipe(res);
});

app.use('/', proxy('http://www.aisa.ru'));

app.listen(port, function (){
  console.log('Server started '+port);
});
