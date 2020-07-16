let express = require('express');
let burger = require('../models/burgers');

let router = express.Router();

router.get('/', function(request, response){
    burger.selectAll(function(data){
        let hdbrsObj = {
            burgers: data
        };
        console.log(hdbrsObj);
        response.render('index', hdbrsObj);
    });
    router.post('/api/burgers', function(request, response){
        burger.insertOne(
            ['burger_name', 'devoured'],
            [request.body.burger_name, request.body.devoured],
            function(result) {
                response.json({id: result.insertId});
            }
        );
    });
    router.put('/api/burgers/:id', function(request, response){
        let condition = 'id = ' + request.params.id;
        console.log('condition', condition);
        burger.updateOne({devoured: request.body.devoured}, condition, function(result){
            if ((result, changedRows === 0)){
                return response.status(404).end();
            }
            else{
                response.status(200).end();
            }
        });
    });
    router.deleteOne(condition, function(request, response){
        let condition = 'id = ' + request.params.id;
        console.log('condition', condition);
        burger.deleteOne(condition, function(result){
            if ((result, changedRows === 0)) {
                return response.status(404).end();
            }
            else {
                response.status(200).end();
            }
        });
    });
});
module.exports = router;