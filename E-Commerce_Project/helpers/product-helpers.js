var db = require('../config/connection')
var db = require('../config/collections')
const collections = require('../config/collections')

module.exports = {
    addProduct: (product, callback) => {
        console.log(product)
        db.get().collection('products').insertOne(product).then((data) => {
          callback:(data.ops[0]._id)
        })
    },
    getAllProducts: () => {
        return new Promise(async(resolve, reject) => {
            let products = await db.get().collection(collections.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    }
}