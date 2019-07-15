var express = require('express'), //npm install express -g
  app = express(),
  port = 3003;
var bodyParser = require('body-parser'); //npm install body-parser -g
var router = require('express').Router();

app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: false
})); 

router.all('/test', function (req, res) {
    console.log('METHOD: ', req.method, '\r\nREQUEST:\r\n', req.body, '\r\n----------------------');
    res.json({'TYPE': req.method, 'REQUEST': req.body});
});

app.use('/', router)
app.listen(port);
