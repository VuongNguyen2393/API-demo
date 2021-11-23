import mongoose  from "mongoose";
const Schema = mongoose.Schema 

const Order_items_Schema = new Schema({
    order_id : {type:Schema.Types.ObjectId, ref:'Order'},
    product_id: {type:Schema.Types.ObjectId,ref:'Product'},
    quantity: {type:Number},
    price: {type:Number}
})

module.exports = mongoose.model('Order_items',Order_items_Schema)
