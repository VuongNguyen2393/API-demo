import mongoose from 'mongoose'
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    created_at : {type: Date},
    total : {type:Number,default:0}
})



module.exports = mongoose.model('Order',OrderSchema)