import React from 'react'
import { useLocation } from 'react-router-dom'

function PaymentSuccess() {
    // const query = new URLSearchParams(window.location.search)
    const query = new URLSearchParams(useLocation().search)
    const reference = query.get("reference")

    return (
        <div>
            <h1>Payment Successful</h1>
            {reference && (
                <strong>Thank you for your payment!! {reference}</strong>
            )}
        </div>
    )
}

export default PaymentSuccess