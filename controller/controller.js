const db = require('../models/db.js');

const controller = {
    
    getUser: function (req, res) {

        var u = req.params.name;

        var query = {name: u};

        db.findOne('trademarket', query, function (result) {

            res.render('index');

        });
    },

    delUser: function (req, res) {

        var u = req.params.name;

        var query = {name: u};

        db.deleteOne('trademarket', query, function (result) {
            res.render('index');
        });
    }

}

module.exports = controller;