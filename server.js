var express = require('express');


var app = express();

app.use(express.static('./public'));

app.listen(4000);
console.log('Server running at http://localhost:4000');