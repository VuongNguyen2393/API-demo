const mongoose2 = require('mongoose')
const Order = require('../models/order')
const products = require('../models/products')

exports.post_order = async(req:any,res:any) => {
    try { 
        const product = await products.findById(req.body.product)
        const price = product.price     
        const post = new Order({
            product : req.body.product,
            quantity: req.body.quantity,
            total_price: req.body.quantity * price
        })
        post.save()
        res.send('Create successfully')
    }
    catch{
        res.send('Error')

    }
};

//find all
exports.find_all = function(req:any,res:any){
    Order.find().exec((err:any,result:any) => {
        if (err){
            res.send('Error')
        }
        res.json(result)
    }) 
}



exports.get_order = function(req:any,res:any){
    const id = req.params.id
    Order.findById(id).populate('product').exec((err:any,result:any) => {
        if (err){
            res.send('Error')
        }
        res.json(result)
    })
}

exports.update_order = function(req:any,res:any){
    const id = req.params.id
    Order.update({_id:id},{$set:req.body},(err:any,result:any) => {
        if (err) {
            res.send('Error')
        }
        res.send('Update successfully')
    })
}

exports.delete_order = function(req:any,res:any){
    const id = req.params.id
    Order.findByIdAndRemove(id,(err:any,result:any) => {
        if (err) {
            res.send('Error')
        }
        res.send('Delete successfully')
    })

}