var express = require('express'),
    passwordless = require('passwordless'),
    fs = require('fs'),
    d3 = require('d3-dsv'),
    bodyParser = require('body-parser'),
    bcrypt = require('bcrypt');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var router = express.Router();

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

router.get('/',
           passwordless.restricted({
               originField: 'origin',
               failureRedirect: '/gradesLogin'
           }),
           function(req, res, next) {
               // console.log("grades.js:routes:username= "+req.user);
               res.render('grades', {title: 'grades',
                                     session: req.session,
                                     username: req.user.split('/')[1]});
           });

router.get('/:username',
           passwordless.restricted(),
           function(req, res, next) {
               [course, username] = req.user.split('/'); // split math000/eroualdes
               if (req.params.username !== username) {
                   res.status(401);
                   res.json({
                       "status": 401,
                       "message": "Invalid request."
                   });
               } else {
                   fs.readFile(
                       '/usr/src/app/grades/'+course+'/grades.csv',
                       'utf8',
                       function (err, d) {
                           if (err) {
                               res.status(401);
                               res.json({
                                   "status": 401,
                                   "message": "Invalid request."
                               });
                           }
                           var data, userData, anonData;
                           data = d3.csvParse(d.toString());
                           var pepper = process.env['pepper'] || '';
                           userData = data.filter(function(row) {
                               return bcrypt.compareSync(username+pepper, row.username);
                           });
                           anonData = data.map(function(row) {
                               delete row.username;
                               return row;
                           });
                           shuffle(anonData);
                           res.json({userData: userData,
                                     anonData: anonData});
                       });
               }
           });

module.exports = router;
