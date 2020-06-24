var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('teaching', {title: 'teaching'});
});

module.exports = router;
