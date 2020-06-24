var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('math314', {title: 'MATH314'});
});

module.exports = router;
