const express_1 = require('express')
const router = express_1.Router()
const {post_product} = require('../controllers/controller_product')


router.post('/product',post_product)

module.exports = router;