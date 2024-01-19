const express = require('express')
const pairController = require('../controllers/pairs')
const router = express.Router()

router.get('/pairs', pairController.getPairs)
router.get('/pair?:pair_id', pairController.getPairById)
router.post('/pair', pairController.createPair)

module.exports = router
