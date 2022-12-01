var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mongoose = require('mongoose')
var mongodb = require('mongodb')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var university = require("./models/university");

passport.use(new LocalStrategy(
  function (username, password, done) {
    Account.findOne({
      username: username
    }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          message: 'Incorrect username.'
        });
      }
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Incorrect password.'
        });
      }
      return done(null, user);
    });
  }))

require('dotenv').config();
const connectionString =
  process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{
   useNewUrlParser: true,
   useUnifiedTopology: true
  });

var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});
  
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var universityRouter = require('./routes/university');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/university', universityRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter);
app.use('/resource',resourceRouter);



// catch 404 and forward to error handler
 // We can seed the collection if needed on server start
 async function recreateDB(){
  // Delete everything
    await university.deleteMany();  
    let instance1 = new
    university({
      University_Name:"Arizona State University", University_Location:'Arizona',
      Number_of_Courses_Offered:254
    });
    instance1.save( function(err,doc) {
        if(err) return console.error(err);
        console.log("First object saved")
      });
      let instance2 = new
      university({
        University_Name:"NorthWest Missouri State University", University_Location:'Maryville',
        Number_of_Courses_Offered:258
      });
      instance2.save( function(err,doc) {
          if(err) return console.error(err);
          console.log("Second object saved")
        });
        let instance3 = new
        university({
          University_Name:"UMKC", University_Location:'Kansas',
          Number_of_Courses_Offered:240
        });
        instance3.save( function(err,doc) {
            if(err) return console.error(err);
            console.log("Third object saved")
          });
  }
  let reseed = true;
  if (reseed) { recreateDB();}


var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

  app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

module.exports = app;