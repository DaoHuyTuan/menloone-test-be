import express from 'express'
const router = express.Router()

router.get('/pair/:pair', getPairById)
router.get('/pairs', getPairs)
