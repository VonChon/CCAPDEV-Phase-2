
var express = require('express');
var exphbs = require('express-handlebars');

var routes = require('./routes/routes.js');

const db = require('./models/db.js');

var app = express();

var port = 3000;

app.listen(port, function() {
    console.log('listening to port ' + port);
});

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.engine("hbs", exphbs({extname: "hbs"}));

app.use('/', routes);
