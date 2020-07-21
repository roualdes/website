var express = require('express'),
    csrf = require('csurf'),
    bodyParser = require('body-parser'),
    dbConnection = require("../db").dbStartup;

var urlencodedParser = bodyParser.urlencoded({extended: false}),
    csrfProtection = csrf(),
    router = express.Router();

router.get('/', function(req, res) {
    res.render('math450', {title: 'MATH450'});
})

router.get('/labs/:labId',
           csrfProtection,
           function(req, res, next) {
               const lab = req.params.labId.padStart(2, '0');
               res.render('math450/labs/lab' + lab,
                          {labId: lab,
                           title: "MATH 450 Lab" + lab,
                           csrfToken: req.csrfToken()});
});

// todo: Validate input
router.post('/labs/submit',
            urlencodedParser,
            csrfProtection,
            async function(req, res) {
                const  data = req.body;
                const d = new Date();
                data.submiton = d.toString();

                // if (d > new Date(data.duedate)) {
                //     res.status(500).send("Can't submit lab passed due date.");
                // }

                if (process.env.DEVELOPMENT === "true") {
                    // success!
                    await res.send(JSON.stringify(data, null, 2));
                } else {
                    try {
                        // validate data
                        data.email = data.email.trim();
                        data.section = parseInt(data.section.trim());
                        data.lab = parseInt(data.lab.trim());

                        // enter in database
                        let doc = await dbConnection.db
                            .collection("math450")
                            .updateOne({email: data.email, section: data.section, lab: data.lab},
                                       {$set: data},
                                       {upsert: true});
                        res.status(201).send("Lab submit successfully.  Congrats!");
                    } catch (err) {
                        res.status(500).send("Error uploading worksheet: " + err);
                    }
                }
            });

module.exports = router;
