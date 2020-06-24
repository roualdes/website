var express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('BayesDNA', {title: 'BayesDNA',
                            session: req.session});
});

module.exports = router;

