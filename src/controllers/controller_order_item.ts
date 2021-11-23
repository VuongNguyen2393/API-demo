const products = require('../models/products')
const order_item = require('../models/order_items')
const order_ = require('../models/order')

exports.post_order_item = async(req:any,res:any) => {
    try { 
        const order_id = req.body.order_id
        const product_list = req.body.product_list
        let total = 0
        for (let i = 0; i < product_list.length; i++){
            let product = await products.findById(product_list[i].product_id)
            let price = Number(product.price)
            let post = new order_item({
                order_id : order_id,
                product_id: product_list[i].product_id,
                quantity: Number(product_list[i].quantity),
                price: product_list[i].quantity * price
            })
            total += product_list[i].quantity * price
            await post.save()
        }
        await order_.update({_id:order_id},{total:total})
        res.status(200).send({message:`Create successfully`})
    }   
    catch (Error:any) {
        res.json({message:Error.message})
    }
};
    
//         const product = await products.findById(req.body.product_id)
//         const price = product.price     
//         const post = new order_item({
//             order_id : req.body.order_id,
//             product_id : req.body.product_id,
//             quantity: req.body.quantity,
//             price: req.body.quantity * price
//         })
//         post.save()
//         res.send('Create successfully')
//     }
//     catch (Error:any) {
//         res.json(Error.message)
//     }
// };

//find all
exports.find_all = async (req:any,res:any) => {
    try{
        const order = await order_item.find()
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



exports.get_order_item = async (req:any,res:any) => {
    try{
        const order = await order_item.findById(req.params.id).populate('product_id').populate('order_id')
        if (order){
            res.json(order)
        }
        else{
            res.status(404).send('Order not found')
        }
    }
    catch (Error:any) {
        res.json(Error.message)
    }
}

exports.update_order_item = async (req:any,res:any) => {
    try{
        const order = await order_item.update({_id:req.params.id},{$set:req.body})
        if (order){
            res.send('Update successfully')
        }
        else{
            res.status(404).send('Have no order')
        }
    }
    catch (Error:any) {
        res.json(Error.message)
    }
}

exports.delete_order_item = async (req:any,res:any) => {
    try{
        const order = await order_item.findByIdAndRemove(req.params.id)
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