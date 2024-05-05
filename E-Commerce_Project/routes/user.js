var express = require('express');
var router = express.Router();
const productHelpers = require("../helpers/product-helpers");

/* GET home page. */
router.get('/', function(req, res, next) {
  productHelpers.getAllProducts.then((products) => {
    res.render("user/view-products", { admin: true, products});
  })
});

module.exports = router;
