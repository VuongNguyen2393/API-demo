const Product = require('../models/products')

exports.post_product = function(req:any,res:any){
    const post = new Product(req.body)
    post.save().then(() => console.log('data updated'))
}

