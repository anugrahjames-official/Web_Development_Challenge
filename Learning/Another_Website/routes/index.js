var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Anugrah James' });
});

router.post('/submit', function(req, res) {
  console.log(req.body)
  
  MongoClient.connect('mongodb://127.0.0.1:27017', function(err, client) {
      client.db('web').collection('users').insertOne(req.body)
  })
  res.send("Form Submitted")
})

module.exports = router;
