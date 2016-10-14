const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session')
const knex = require('./db/knex');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const configAuth = require('./public/config/auth');

const routes = require('./routes/index');
const signup = require('./routes/signup');
const login = require('./routes/login');
const logout = require('./routes/logout');
const posts = require('./routes/posts');
const newpost = require('./routes/newpost')

const app = express();

//
// passport.use(new FacebookStrategy({
//         clientID: configAuth.clientID,
//         clientSecret: configAuth.clientSecret,
//         callbackURL: configAuth.callbackURL,
//         profileFields: ['email', 'name', 'displayName', 'profileUrl'],
//         enableProof: true,
//         passReqToCallback: true
//     },
//
//     function(req, accessToken, refreshToken, profile, cb1) {
//         findOrCreate(profile, (err, user) => {
//             req.session.userInfo = user;
//             return cb1(null, user);
//         });
//     }
// ))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(passport.initialize());
// app.use(cookieSession({
//     name: "alisblog",
//     secret: process.env.SESSION_SECRET,
//     secureProxy: app.get('env') === 'production'
// }));

app.use('/', routes);
app.use('/signup', signup);
app.use('/login', login);
app.use('/logout', logout);
app.use('/posts', posts);
app.use('/newpost', newpost)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
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
