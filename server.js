let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let exphbs = require('express-handlebars');
let routes = require('./controllers/burgers_controller.js');
let port = process.env.port || 3000;

app.use(express.json());
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