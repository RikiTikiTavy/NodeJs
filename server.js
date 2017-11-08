var express = require('express');
var app = express();
var port = 8181;
var proxy = require('express-http-proxy');
var date = require('node-datetime');
var moment = require('moment');

app.use(express.static(__dirname + '/node_modules/jquery/dist'));
app.use( express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use(express.static(__dirname+'/dist'));
app.use(express.static(__dirname+'/src'));

moment.locale('ru');
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    var dat = date.create();
    var format = moment().format('DD MMMM YYYY');
    res.render(__dirname+'/src/views/index', {
        time: format
    });
});


const apiProxy = proxy('http://www.aisa.ru/', {
  proxyReqPathResolver: function(req) {
    return 'http://www.aisa.ru/images/round_logo@2x.png';
  }
});

app.use(['/logo.png', '/images/round_logo@2x.png'], apiProxy);


app.listen(port, function (){
  console.log('Server started '+port);
});
