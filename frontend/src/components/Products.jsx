import React from 'react'
import axios from 'axios'
// import proImages from './data.js'
// import Razorpay from 'razorpay'

function Products({ priya }) {

    const checkOut = async (amount) => {
        console.log(amount);
        const { data: keyData } = await axios.get("/api/v1/getKey")
        console.log(keyData, "check keyData");


        const { key } = keyData
        console.log(key, "check key");

        const { data: orderData } = await axios.post("api/v1/payment/process", { amount })
        const { order } = orderData
        console.log(order, "check order");
        const options = {
            // key: key, // Replace with your Razorpay key_id
            key, //if key and value same only once is enough
            amount,
            currency: 'INR',
            name: 'Priya"s Shop',
            description: 'Payment for a product',
            order_id: order.id, // This is the order_id created in the backend
            callback_url: 'api/v1/paymentVerification', // Your success URL
            prefill: {
                name: 'Priya',
                email: 'priya@example.com',
                contact: '9999999999'
            },
            theme: {
                color: '#F37254'
            },
        };

        // eslint-disable-next-line no-undef
        const rzp = new Razorpay(options);
        rzp.open();
    }




    return (
        <div>

            {
                priya.map((item) => (
                    <div>
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                        <button onClick={() => checkOut(item.price)}>Pay{item.price}</button>
                    </div>))
            }



        </div>
    )
}

export default Products