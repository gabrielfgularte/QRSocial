'use strict'

import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import route from './routes/index'

const app = express()
const routes = route

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public', 'dist')))

app.use('/', routes)

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
});
