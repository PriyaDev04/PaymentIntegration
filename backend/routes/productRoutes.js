import express from 'express'
const router = express.Router()

import { processPayment, getKey, paymentVerification } from '../controllers/productController.js'

router.route("/payment/process").post(processPayment)
router.route("/getKey").get(getKey)
router.route("/paymentVerification").post(paymentVerification)


export default router;