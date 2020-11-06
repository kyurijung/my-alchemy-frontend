var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Intro to Web Apps' });
});

router.get('/sayMyName', (req, res, next) => {
  if (!req.query.myName) return next('Please send your name') 
  res.render('index', {
    title: 'Intro to Web Apps',
    personName: req.query.myName
  });
});

module.exports = router;
