var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const values = ["Anugrah James", "Albin", "Anugrah", "James"]

  const person= {
    name: "Anugrah",
    age: 18,
    city: "Kannur",
    country: "India", 
    language: "Malayalam",
    comments: {comment: "This is a sample comment", date: "2024-01-01"}
  }

  res.render('index', {person});
});

module.exports = router;
