var express = require('express'),
    csrf = require('csurf'),
    bodyParser = require('body-parser'),
    dbConnection = require("../db").dbStartup,
    JSONStream = require('JSONStream'),
    jStat = require('jstat');

var urlencodedParser = bodyParser.urlencoded({extended: false}),
    // csrfProtection = csrf(),
    router = express.Router();

router.get('/', function(req, res) {
    res.render('math000', {title: 'MATH000'});
});

function maybeconvert(x) {
    try {
        z = +x;
        if (isNaN(z)) {
            throw "can't convert";
        }
    } catch(err) {
        z = x;
    } finally {
        return(z);
    }
};

function roundXd(decimals) {
    let m = 10 ** decimals;
    return x => {
        return Math.round(x * m) / m;
    }
}

router.get('/labs/:labId',
           // csrfProtection,
           function(req, res, next) {
               const lab = req.params.labId.padStart(2, '0');
               res.render('math000/labs/lab' + lab,
                          {labId: lab,
                           dU: (a, b) => {
                               return(Math.round(Math.random() * (b - a) + a));
                           },
                           cU: (a, b) => Math.random() * (b - a) + a,
                           round1d: roundXd(1),
                           round2d: roundXd(2),
                           title: "MATH 000 Lab" + lab});  // TODO until a better fix
                           // csrfToken: req.csrfToken()});
           });

router.get('/download',
           function(req, res, next) {
               res.render('math000/download',
                          {title: "MATH 000 downloads"});
           });

router.post('/download',
            urlencodedParser,
            function(req, res, next) {
                const password = req.body.password;
                if (password === process.env['labdownloads']) {
                    dbConnection.db
                        .collection("math000")
                        .find()
                        .pipe(JSONStream.stringify(open="", sep="\n", close="\n"))
                        .pipe(res.type("json")
                              .set({"Content-disposition": "attachment; filename=math000labs.json"}));
                } else {
                    res.status(500).send("Error downloading labs.");
                }

                return;
            });

// todo: Validate input
router.post('/labs/submit',
            urlencodedParser,
            // csrfProtection,
            async function(req, res) {
                const data = req.body;
                const d = new Date();
                data.submiton = d.toString();

                // if (d > new Date(data.duedate)) {
                //     res.status(500).send("Can't submit lab passed due date.");
                // }

                // email
                let labMetaDataValid = true;
                if (data.email) {
                    data.email.trim();
                } else {
                    labMetaDataValid = false;
                }

                // section number
                if (data.section) {
                    data.section = parseInt(data.section.trim());
                    if (!Number.isInteger(data.section)) {
                        labMetaDataValid = false;
                    }
                } else {
                    labMetaDataValid = false;
                }

                // lab number
                if (data.lab) {
                    data.lab = parseInt(data.lab.trim());
                    if (!Number.isInteger(data.lab)) {
                        labMetaDataValid = false;
                    }
                } else {
                    labMetaDataValid = false;
                }

                // convert typed numbers, arrays, and arrays of numbers
                for (let k of Object.keys(data)) {
                    // typed?
                    if (k.search("::") >= 0) {
                        let type = k.split("::")[1];

                        // an array
                        if (type.search("a") >= 0) {
                            data[k] = data[k]
                                .replace("[", "")
                                .replace("]", "")
                                .split(",")

                            // an array containing numbers
                            if (type.search("n") >= 0) {
                                data[k] = data[k].map(x => maybeconvert(x));
                            }
                        } else {
                            // a number and not an array
                            if (type.search("n") >= 0) {
                                data[k] = maybeconvert(data[k]);
                            }
                        }
                    }
                }

                if (!labMetaDataValid) {
                    return res.status(500).send("Lab meta data incorrect.");
                }

                if (process.env.DEVELOPMENT === "true") {
                    await res.send(JSON.stringify(data, null, 2));
                } else {
                    try {
                        // enter in database
                        let doc = await dbConnection.db
                            .collection("math000")
                            .updateOne({email: data.email,
                                        section: data.section,
                                        lab: data.lab},
                                       {$set: data},
                                       {upsert: true});
                        res.status(201).send("Lab submit successfully.  Congrats!");
                    } catch (err) {
                        res.status(500).send("Error uploading worksheet: " + err);
                    }
                }
            });

module.exports = router;
