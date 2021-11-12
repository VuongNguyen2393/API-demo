const Product = require('../models/products')

exports.post_product = function(req:any,res:any){
    const post = new Product({
        product_id   : req.body.product_id,
        product_name : req.body.product_name,
        category     : req.body.category,
        price        : req.body.price,
        rating       : req.body.rating
    })
    post.save().then(() => console.log('data updated'))
}

exports.get_product = function(req:any,res:any){
    const id = req.params.product_id
    Product.findById(id).then((result:any) => {
        res.json(result)
    })
}