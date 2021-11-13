const Product = require('../models/products')

exports.post_product = function(req:any,res:any){
    const post = new Product({
        product_name : req.body.product_name,
        category     : req.body.category,
        price        : req.body.price
    })
    post.save((err:any) => {
        if (err) {
            res.send('Error')
        }
        res.send('create successfully')
    })
}

exports.get_product = function(req:any,res:any){
    const id = req.params.id
    Product.findById(id).populate('category').exec((err:any,result:any) => {
        if (err) {
            res.send('Error')
        }
        res.json(result)
    })
}

exports.update_product = function(req:any,res:any){
    const id = req.params.id
    Product.update({_id:id},{$set:req.body},(err:any,result:any) => {
        if (err) {
            res.send('Error')
        }
        res.send('Update successfully')
    })

}

exports.delete_product = function(req:any,res:any){
    const id = req.params.id
    Product.findByIdAndRemove(id,(err:any,result:any) => {
        if (err) {
            res.send('Error')
        }
        res.send('Delete successfully')
    })

}