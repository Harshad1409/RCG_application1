var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})



app.get('/index', function (req, res) {
   // First read existing users.
   res.sendFile( __dirname + "/" + "index.htm");
})


app.post('/addcustomer',urlencodedParser, function (req, res) {
   // First read existing users.
   console.log(req);
   response = {
      first_name:req.body.fname,
      last_name:req.body.lname
   };
   console.log(response);
   res.end(JSON.stringify(response));
})


