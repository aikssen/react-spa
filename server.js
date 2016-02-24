var express = require('express');
var ejs = require('ejs');

var app = express();

app.use(express.static('./public'));

//app.set('views','./views');
//app.engine('html', ejs.renderFile);
//
//app.get('*', function(req, res, next){
//    res.render('index.html');
//});

//app.all('*', function(req, res) {
//    res.redirect("/");
//});

app.listen(4000);
console.log('Server running at http://localhost:4000');