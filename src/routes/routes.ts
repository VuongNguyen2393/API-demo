const express_1 = require('express')
const router = express_1.Router()
const controller_product = require('../controllers/controller_product')
const controller_category = require('../controllers/controller_category')
const controller_order = require('../controllers/controller_order')
const controller_order_item = require('../controllers/controller_order_item')


router.post('/product',controller_product.post_product)
router.get('/product',controller_product.find_all)
router.get('/product/:id',controller_product.get_product)
router.put('/product/:id',controller_product.update_product)
router.delete('/product/:id',controller_product.delete_product)


router.post('/category',controller_category.post_category)
router.get('/category',controller_category.find_all)
router.get('/category/:id',controller_category.get_category)
router.put('/category/:id',controller_category.update_category)
router.delete('/category/:id',controller_category.delete_category)


router.post('/order',controller_order.post_order)
router.get('/order',controller_order.find_all)
router.get('/order/:id',controller_order.get_order)
// router.put('/order/:id',controller_order.update_order)
router.delete('/order/:id',controller_order.delete_order)


router.post('/order_item',controller_order_item.post_order_item)
router.get('/order_item',controller_order_item.find_all)
router.get('/order_item/:id',controller_order_item.get_order_item)
router.put('/order_item/:id',controller_order_item.update_order_item)
router.delete('/order_item/:id',controller_order_item.delete_order_item)

module.exports = router;