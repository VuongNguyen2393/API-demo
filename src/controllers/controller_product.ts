const Product = require('../models/products')

exports.post_product = async (req:any,res:any) => {
    try{
        const post = new Product({
            product_name : req.body.product_name,
            category     : req.body.category,
            price        : req.body.price
        })
        post.save()
    }
    catch (Error:any) {
        res.json(Error.message)
    }
}

exports.find_all = async (req:any,res:any) => {
    try{
        const product = await Product.find()
        if (product){
            res.json(product)
        }
        else{
            res.status(404).send('Have no product to show')
        }
    }
    catch (Error:any) {
        res.json(Error.message)
    }
}



exports.get_product = async (req:any,res:any) => {
    try{
        const product = await Product.findById(req.params.id).populate('category')
        if (product){
            res.json(product)
        }
        else{
            res.status(404).send('Have no product')
        }
    }
    catch (Error:any){
        res.json(Error.message)
    }
}

exports.update_product = async(req:any,res:any) => {
    try{
        const product = await Product.update({_id : req.params.id},{$set:req.body})
        if (product){
            res.send('Update successfully')
        }
        else{
            res.status(404).send('Have no product')
        }
    }
    catch (Error:any) {
        res.json(Error.message)
    }
}

exports.delete_product = async (req:any,res:any) => {
    try {
        const product = await Product.findByIdAndRemove(req.params.id)
        if (product){
            res.send('Delete successfully')
        }
        else{
            res.status(404).send('Have no product')
        }
    }
    catch (Error:any) {
        res.json(Error.message)
    }
}