var express = require('express');

var app = express();

app.use(express.static('./public'));


//app.all('*', function(req, res) {
//    res.redirect("/");
//});

app.get('*', function(req, res) {
    res.sendFile( __dirname + '/public/index.html' );
});


app.listen(4000);
console.log('Server running at http://localhost:4000');