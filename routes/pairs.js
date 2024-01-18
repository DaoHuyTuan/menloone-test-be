const express = require('express')
const pairController = require('../controllers/pairs')
const router = express.Router()

router.get('/', pairController.getPairs)
router.get('/pair/:pair', pairController.getPairById)
router.post('/pair', pairController.createPair)

module.exports = router
