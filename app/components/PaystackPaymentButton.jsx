"use client"
import { PaystackButton } from "react-paystack"

export default function PaystackPaymentButton({email, amount, productName, productId}) {
    const publickey = "pk_test_b62169cdcb499f160ec7682a0987609cc527802b"
    const handleSuccess = async (reference)=>{
        console.log('payment successful', reference)
        alert('Payment Successful')
    }
    const handleClose = ()=>{
        console.log('Payment not completed')
        alert('Payment was Aborted')
    }
    return(
        <PaystackButton
        label="early-mart001"
        email={email}
        amount={amount}
        publicKey={publickey}
        text={`Buy ${productName}`} 
        onSuccess={handleSuccess}
        onClose={handleClose}
        className="bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-all"
        

        />
    )
}