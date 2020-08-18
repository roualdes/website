require('dotenv').config();

var express = require('express'),
    session = require('express-session'),
    path = require('path'),
    helmet = require('helmet'),
    bodyParser = require('body-parser'),
    // compression = require('compression'),
    favicon = require('serve-favicon'),
    passwordless = require('passwordless'),
    flash = require('connect-flash'),
    LokiTokenStore = require('passwordless-lokijsstore'),
    LokiStore = require('connect-loki')(session),
    db = require("./db").dbStartup;

var sess = {
    store: new LokiStore(),
    secret: process.env.SESSION_SECRET, // this needs to be hidden!
    cookie: { maxAge: 1000*60*60, httpOnly: true, sameSite: true},
    name: 'sessionID',
    resave: false,
    saveUninitialized: false,
    proxy: true
}

app = express();
// app.use(compression())
app.use(helmet());              // TODO CSP
app.use(helmet.expectCt({       // check out secrityheaders.io
  enforce: true,
  maxAge: 10
}))
app.use(helmet.referrerPolicy({policy: 'origin'})); // => same-origin; when chrome allows it
// app.use(helmet.hpkp({
//     maxAge: 7776000,            // 90 days
//     sha256s: [process.env.HPKP_SHA01,
//               process.env.HPKP_SHA02]}));
app.disable('x-powered-by');
if (process.env.DEVELOPMENT !== "true") {
    app.set('trust proxy', 1);
    sess.cookie.secure = true;
}

// connect database
db.connect(err => {
    if (err) throw err;
});

app.use(session(sess))
app.use(flash());
app.use(passwordless.sessionSupport());
app.use(passwordless.acceptToken({enableOriginRedirect: true}));
app.use(favicon(__dirname + '/public/favicon/er.ico'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public/math105')));

// init passwordless
passwordless.init(new LokiTokenStore('tokens.json'));

// todo: express validator of input ... added security?
// todo: content security policy? helmet
// todo: put users of ./routes/login.js in directory

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// routes
var routes = require('./routes/index'),
    projects = require('./routes/projects'),
    notes = require('./routes/notes'),
    livecode = require('./routes/livecode'),
    livecodeLogin = require('./routes/livecodeLogin'),
    teaching = require('./routes/teaching'),
    Bayes = require('./routes/BayesDNA'),
    grades = require('./routes/grades'),
    gradesLogin = require('./routes/gradesLogin'),
    math105 = require('./routes/math105'),
    math314 = require('./routes/math314'),
    math450 = require('./routes/math450'),
    logout = require('./routes/logout');

app.use('/', routes);
app.use('/projects', projects);
app.use('/notes', notes);
app.use('/livecode', livecode);
app.use('/livecodeLogin', livecodeLogin);
app.use('/teaching', teaching);
app.use('/BayesDNA', Bayes);
app.use('/grades', grades);
app.use('/gradesLogin', gradesLogin);
app.use('/logout', logout);
app.use('/math105', math105);
app.use('/math450', math450);
app.use('/math314', math314);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (process.env.DEVELOPMENT === "true") {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
