var express = require('express'),
    csrf = require('csurf'),
    passwordless = require('passwordless'),
    email = require('emailjs'),
    bodyParser = require('body-parser'),
    parse = require('csv-parse/lib/sync'),
    fs = require('fs'),
    bcrypt = require('bcrypt');

var urlencodedParser = bodyParser.urlencoded({extended: false}),
    csrfProtection = csrf(),
    router = express.Router();

router.get('/', csrfProtection,
           function(req, res, next) {
               res.render('gradesLogin', {title: 'login',
                                          session: req.session,
                                          csrfToken: req.csrfToken(),
                                          origin: req.query.origin,
                                          message: req.flash('info')});
});

var client = new email.SMTPClient({
    user: process.env.PASSWORDLESS_USER,
    password: process.env.PASSWORDLESS_PASS,
    host: "smtp.gmail.com",
    tls: true
});

var host = process.env.PASSWORDLESS_HOST || 'roualdes.us';

passwordless.addDelivery(
    function(tokenToSend, uidToSend, recipient, callback, req) {
        var email = recipient.split('/')[1]; // math000/"eroualdes"
        smtpServer.send(
            {
                text: 'Access granted to https://'
                    + host + req.body.origin + '?token=' + tokenToSend + '&uid='
                    + encodeURIComponent(uidToSend)
                    + '\n\nDo not respond to this email.',
                from: "roualdes.us@gmail.com",
                to: email+'@mail.csuchico.edu',
                subject: 'Token for ' + host
            },
            function(err, message) {
                if(err) {
                    console.log(err);
                }
                callback(err);
            }
        );
    }
);

// todo: Validate input
router.post('/', urlencodedParser, csrfProtection,
            passwordless.requestToken(
                function(user, delivery, callback) {
                    [course, username] = user.split('/'); // split math000/eroualdes
                    var grades_path = '/usr/src/app/grades/' + course + '/grades.csv';
                    var data = fs.readFileSync(grades_path,'utf8',
                                               function(err, d) {
                                                   res.status(401);
                                                   res.json({
                                                       "status": 401,
                                                       "message": "Invalid request."
                                                   });
                                               });
                    var course_data = parse(data, {columns: true});
                    var pepper = process.env['pepper'] || '';
                    for (var i=0; i<course_data.length; i++) {
                        if (bcrypt.compareSync(username+pepper, course_data[i].username)) {
                            return callback(null, user);
                        }
                    }
                    callback(null, null);
                },
                { originField: 'origin' }
            ),
            function(req, res) {
                // success!
                req.flash('info', 'Token sent to student email.');
                res.redirect('/gradesLogin');
            });

module.exports = router;
