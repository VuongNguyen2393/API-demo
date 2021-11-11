import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    product_name : {type: String},
    category : {type: String},
    price : {type: Number},
    rating : {type: Number}
})

module.exports = mongoose.model('Product',ProductSchema)