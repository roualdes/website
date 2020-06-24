var express = require('express'),
    router = express.Router(),
    passwordless = require('passwordless');

/* GET home page. */
router.get('/', passwordless.logout(),
           function(req, res, next) {
               res.redirect('/teaching');
           });

module.exports = router;
