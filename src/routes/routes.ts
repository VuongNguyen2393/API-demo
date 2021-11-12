const express_1 = require('express')
const router = express_1.Router()
const controller_product = require('../controllers/controller_product')
const controller_category = require('../controllers/controller_category')
const controller_order = require('../controllers/controller_order')


router.post('/product',controller_product.post_product)
router.get('/product/:id',controller_product.get_product)
router.put('/product/:id',controller_product.update_product)
router.delete('/product/:id',controller_product.delete_product)


router.post('/category',controller_category.post_category)
router.get('/category/:id',controller_category.get_category)
router.put('/category/:id',controller_category.update_category)
router.delete('/category/:id',controller_category.delete_category)


router.post('/order',controller_order.post_order)
router.get('/order/:id',controller_order.get_order)
router.put('/order/:id',controller_order.update_order)
router.delete('/order/:id',controller_order.delete_order)

module.exports = router;