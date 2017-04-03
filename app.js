var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static('statics'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
