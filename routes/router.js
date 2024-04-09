const express = require('express');
const adminController = require('../controllers/adminController')

const router = express.Router();

router.get('/listProducts/:id', adminController.listProducts);
router.get('/listColors/:id', adminController.listColors);
router.get('/listImage/:id', adminController.listImage);
router.get('/listSkus/:id', adminController.listSkus);

router.post('/createProducts', adminController.createProducts);
router.post('/createColors', adminController.createColors);
router.post('/createImages', adminController.createImages);
router.post('/createSkus', adminController.createSkus);

module.exports = router;