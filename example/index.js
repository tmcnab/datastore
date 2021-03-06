import createError from 'http-errors'
import cookieParser from 'cookie-parser'
import express from 'express'
import http from 'http'
import logger from 'morgan'
import path from 'path'
import routers from './routers/index.js'
import hbs from 'hbs'
// import DataStore from '../lib/Server.js'

// const db = new DataStore()
const app = express()

// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.localsAsTemplateData(app);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'static')));

routers(app)

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

http.createServer(app).listen(3000);
