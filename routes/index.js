'use strict'

import Router from 'express'
const router = Router()

router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Express App' });
});

export default router
