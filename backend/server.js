import app from './app.js'
import dotenv from 'dotenv'
import Razorpay from 'razorpay'

dotenv.config({ path: "./config/config.js" })

const port = process.env.PORT || 5000
// var instance = new Razorpay({
//     key_id: process.env.KEYID,
//     key_secret: process.env.SECRETKEY,
//     headers: {
//         "X-Razorpay-Account": "<merchant_account_id>"
//     }
// });

// instance.orders.all().then(console.log).catch(console.error);

export const instance = new Razorpay({
    key_id: process.env.KEYID,
    key_secret: process.env.SECRETKEY,
    headers: {
        "X-Razorpay-Account": "<merchant_account_id>"
    }
})


// app.post("/payment/process", processPayment)


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
