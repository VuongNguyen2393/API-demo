const mongoose2 = require('mongoose')
const Order = require('../models/order')


exports.post_order = function(req:any,res:any){
    const post = new Order({
        product : req.body.product,
        quantity       : req.body.quantity,
        total_price: req.body.total_price
    })
    post.save().then(
        res.send('Create successfully')
    )
}

exports.get_order = function(req:any,res:any){
    const id = req.params.order_id
    Order.findById(id).polulate('product').then((result:any) => {
        res.json(result)
    })
}

exports.update_order = function(req:any,res:any){
    const id = req.params.order_id
    Order.update({_id:id},{$set:req.body}).then(
        res.send('Update successfully')
    )

}

exports.delete_order = function(req:any,res:any){
    const id = req.params.order_id
    Order.findByIdAndRemove(id).then(
        res.send('Delete successfully')
    )

}