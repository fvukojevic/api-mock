var express = require('express'), //npm install express -g
  app = express(),
  port = 3003;
var bodyParser = require('body-parser'); //npm install body-parser -g
var router = require('express').Router();

app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: false
})); 

router.all('*', function (req, res) {
  console.log('URL: ', req.originalUrl || false);
  console.log('METHOD: ', req.method);
  console.log('CONTENT-TYPE: ', req.headers || false);
  console.log('REQUEST:\r\n', req.body);
  console.log('----------------------');
  res.json(
    {
      'URL': req.originalUrl || false,
      'TYPE': req.method,
      'HEADERS': req.headers || false,
      'REQUEST': req.body
    }
  );
});

app.use('/', router)
app.listen(port);
