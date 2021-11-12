const express_1 = require('express')
const router = express_1.Router()
const controller_product = require('../controllers/controller_product')


router.post('/product',controller_product.post_product)
router.get('/product/:product_id',controller_product.get_product)

module.exports = router;