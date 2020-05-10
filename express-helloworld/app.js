var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello Felipe ans Diana!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Gabriel Felipe!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

