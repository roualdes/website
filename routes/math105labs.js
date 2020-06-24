var express = require('express'),
    csrf = require('csurf'),
    bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false}),
    csrfProtection = csrf(),
    router = express.Router();

router.get('/:labId',
           csrfProtection,
           function(req, res, next) {
               res.render('math105lab' + req.params.labId,
                          {csrfToken: req.csrfToken()});
});

// todo: Validate input
router.post('/submit',
            urlencodedParser,
            csrfProtection,
            function(req, res) {
                // success!
                res.send(JSON.stringify(req.body, null, 2));
            });

module.exports = router;
