var express = require('express'),
    router = express.Router();

router.get('/', function(req, res, next) {
    res.render('livecode', {title: 'livecode',
                       session: req.session});        
});

module.exports = router;
