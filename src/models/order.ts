import mongoose from 'mongoose'
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    product :{type: Schema.Types.ObjectId,ref:'Product'},
    quantity : {type: Number,default:1},
    total_price : {type: Number}
})



module.exports = mongoose.model('Order',OrderSchema)