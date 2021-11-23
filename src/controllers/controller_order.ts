const Order = require('../models/order')
const Order_item = require('../models/order_items')

exports.post_order = async(req:any,res:any) => {
    try { 
        const post = new Order({
            created_at : Date()
        })
        post.save()
        res.send('Create successfully')
    }
    catch (Error:any) {
        res.json(Error.message)
    }
};

//find all
exports.find_all = async (req:any,res:any) => {
    try{
        const order = await Order.find()
        if (order){
            res.json(order)
        }
        else{
            res.status(404).send('Have no order')
        }
    }
    catch (Error:any) {
        res.json(Error.message)
    }
}



exports.get_order = async (req:any,res:any) => {
    try{
        const order = await Order.findById(req.params.id)
        const order_detail = await Order_item.find({order_id:req.params.id},'product_id quantity price').populate('product_id')
        // order_detail.map

        if (order){
            // res.json(order)
            res.json(order_detail)
        }
        else{
            res.status(404).send('Order not found')
        }
    }
    catch (Error:any) {
        res.json(Error.message)
    }
}

// exports.update_order = async (req:any,res:any) => {
//     try{
//         const order = await Order.update({_id:req.params.id},{$set:req.body})
//         res.send('Update successfully')
//     }
//     catch (Error:any) {
//         res.json(Error.message)
//     }
// }

exports.delete_order = async (req:any,res:any) => {
    try{
        const order = await Order.findByIdAndRemove(req.params.id)
        if (order){
            res.send('Delete successfully')
        }
        else{
            res.status(404).send('Have no order')
        }
        
    }
    catch (Error:any) {
        res.json(Error.message)
    }
}