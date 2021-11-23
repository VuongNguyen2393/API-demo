import { Error } from "mongoose"

const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./src/routes/routes')


const app = express()
const port = process.env.PORT || 3000
const db = mongoose.connection

dotenv.config()


// connect DB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true}).then(() => {
    console.log('MongoDB connected')
}).catch((err:any) => {
    console.log('Error connecting to MongoDB')
    console.log(`${err}`)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',routes)
//=============Chưa test được DB nên test tạm cái này====================
// app.get('/product', (req:any, res:any) => {
//     res.json({  Product_name:'quạt',
//                 Categofy:'gia dụng',
//                 Price: '120.000'})
//   })
//=============================================================================



app.listen(port, () => {
    console.log(`Sever API - VuongND9 is listening on port ${port}`)
})

module.exports = app