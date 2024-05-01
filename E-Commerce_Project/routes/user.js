var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products = [
    {
      name: "Samsung Galaxy S24 Ultra",
      category: "Mobile",
      description:  "Introducing Samsung Galaxy S24 Ultra, now with many next-gen AI features and capabilities. Powered with Galaxy AI, Galaxy S24 Ultra adapts to your passions and behaviors to make a new level of achievement possible. Pair Galaxy S24 Ultra with Verizon, the network America relies on, and experience ultra-fast connectivity with Verizon’s 5G Ultra Wideband network, now in more and more places.",
      image: "https://m.media-amazon.com/images/I/81vxWpPpgNL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      name: "Samsung Galaxy S24+",
      category: "Mobile",
      description:  "Samsung Galaxy S24+ mobile was launched on 17th January 2024. The phone comes with a 6.70-inch touchscreen display (QHD+). The display sports Gorilla Glass Victus 2 for protection. Samsung Galaxy S24+ is powered by a deca-core processor. It comes with 12GB of RAM. The Samsung Galaxy S24+ runs Android 14 and is powered by a 4900mAh non-removable battery. The Samsung Galaxy S24+ supports wireless charging, as well as proprietary fast charging.",
      image: "https://m.media-amazon.com/images/I/71j6POXc0uL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      name: "Samsung Galaxy S24",
      category: "Mobile",
      description:  "Samsung Galaxy S24 mobile was launched on 17th January 2024. The phone comes with a 120 Hz refresh rate 6.20-inch touchscreen display (FHD+). The display sports Gorilla Glass for protection. Samsung Galaxy S24 is powered by an octa-core processor. It comes with 8GB of RAM. The Samsung Galaxy S24 runs Android 14 and is powered by a 4000mAh non-removable battery. The Samsung Galaxy S24 supports wireless charging, as well as proprietary fast charging.",
      image: "https://m.media-amazon.com/images/I/71ez69tPl4L._AC_UF1000,1000_QL80_.jpg",
    }
  ]
  res.render('index', { title: 'E-Commerce', products, admin:false });
});

module.exports = router;
