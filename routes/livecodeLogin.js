var express = require('express'),
    router = express.Router();

router.get('/', function(req, res, next) {
    res.render('livecodeLogin', {title: 'livecodeLogin',
                                 apiKey: process.env.LIVECODE_APIKEY,
                                 authDomain: process.env.LIVECODE_AUTHDOMAIN,
                                 databaseURL: process.env.LIVECODE_DATABASEURL,
                                 session: req.session});
});


module.exports = router;
