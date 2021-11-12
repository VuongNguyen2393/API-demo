import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    product_name : {type: String},
    category: {type: Schema.Types.ObjectId,ref:'Category'},
    price : {type: Number}
})

module.exports = mongoose.model('Product',ProductSchema)