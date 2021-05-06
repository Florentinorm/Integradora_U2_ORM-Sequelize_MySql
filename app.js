var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const sequelize = require('./config/database');
require('./model/asociations');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Database
const db = require('./config/database');
const PORT = process.env.PORT || 5000;

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', usersRouter);

// catch 404 and forward to error handler
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
// Arrancamos el servidor
app.listen(PORT, function () {
  console.log(`La app ha arrancado en http://localhost:${PORT}`);

  // Conectase a la base de datos
  // Force true: DROP TABLES
  sequelize.sync({ force: false }).then(() => {
      console.log("Nos hemos conectado a la base de datos");
  }).catch(error => {
      console.log('Se ha producido un error', error);
  })

});


module.exports = app;
