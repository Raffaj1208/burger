var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var routes = require('./controllers/burgers_controller.js');
var port = process.env.port || 3000;

app.use(express.json());
app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(routes);

app.listen(port, function(){
    console.log('server listening on: http://localhost: ' + port);
});