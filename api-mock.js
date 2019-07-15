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
  console.log('CONTENT-TYPE: ', req.headers['Content-Type'] || false);
  console.log('USER-AGENT: ', req.headers['user-agent'] || false);
  console.log('COOKIE: ', req.headers['cookie'] || false);
  console.log('AUTH: ', req.headers['authorization'] || false);
  console.log('METHOD: ', req.method);
  console.log('REQUEST:\r\n', req.body);
  console.log('----------------------');
  res.json(
    {
      'URL': req.originalUrl || false,
      'CONTENT-TYPE': req.headers['content-type'],
      'USER-AGENT': req.headers['user-agent'] || false,
      'COOKIE': req.headers['cookie'] || false,
      'AUTH': req.headers['authorization'] || false,
      'TYPE': req.method,
      'REQUEST': req.body
    }
  );
});

app.use('/', router)
app.listen(port);
