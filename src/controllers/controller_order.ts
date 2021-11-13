const mongoose2 = require('mongoose')
const Order = require('../models/order')


exports.post_order = function(req:any,res:any){

    const post = new Order({
        product : req.body.product,
        quantity: req.body.quantity,
        total_price: req.body.total_price
        //total_price: req.body.quantiy * 3
    })
    post.save((err:any) => {
        if (err) {
            res.send('Error')
        }
        res.send('Create successfully')
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