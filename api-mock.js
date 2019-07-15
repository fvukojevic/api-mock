var express = require('express'), //npm install express -g
  app = express(),
  port = 3003;
var bodyParser = require('body-parser'); //npm install body-parser -g
var router = require('express').Router();

app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: false
})); 

router.post('/test', function (req, res) {
    console.log('REQUEST:', req.body);
    res.json({"REQUEST": req.body});
});

router.get('/test', function (req, res) {
    console.log('REQUEST:', req.body);
    res.json({"REQUEST": req.body});
});

app.use('/', router)
app.listen(port);
