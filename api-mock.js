var express = require('express'), //npm install express -g
  app = express(),
  port = 3003;
let router = require('express').Router();

app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: false
})); 

let apiRoutes = router.post('/test', function (req, res) {
    console.log('REQUEST:', req.body);
    res.json({"REQUEST": req.body});
});

let apiRoutes = router.get('/test', function (req, res) {
    console.log('REQUEST:', req.body);
    res.json({"REQUEST": req.body});
});

app.use('/', apiRoutes)
app.listen(port);
