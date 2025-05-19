"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { CheckoutForm } from "@/components/checkout-form"
import { OrderSummary } from "@/components/order-summary"
import { PaymentMethods } from "@/components/payment-methods"
import { CheckCircle } from "lucide-react"

export default function CheckoutPage() {
  const { cart, clearCart } = useCart()
  const [step, setStep] = useState(1)
  const [orderComplete, setOrderComplete] = useState(false)

  const handlePlaceOrder = () => {
    // In a real app, you would process the payment and create the order here
    setOrderComplete(true)
    clearCart()
  }

  if (orderComplete) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-2xl text-center">
        <div className="mb-6 text-green-500 flex justify-center">
          <CheckCircle size={64} />
        </div>
        <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
        <p className="text-lg mb-8">Thank you for your purchase. Your order has been received.</p>
        <p className="mb-2">Order #: MW-{Math.floor(100000 + Math.random() * 900000)}</p>
        <p className="mb-8">A confirmation email has been sent to your email address.</p>
        <Button asChild>
          <a href="/">Return to Home</a>
        </Button>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <p className="text-xl mb-6">Your cart is empty</p>
        <Button asChild>
          <a href="/products">Continue Shopping</a>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="border rounded-lg p-6 mb-6">
            <div className="flex mb-6">
              <div className={`flex-1 text-center pb-4 ${step === 1 ? "border-b-2 border-primary font-bold" : ""}`}>
                1. Shipping
              </div>
              <div className={`flex-1 text-center pb-4 ${step === 2 ? "border-b-2 border-primary font-bold" : ""}`}>
                2. Payment
              </div>
              <div className={`flex-1 text-center pb-4 ${step === 3 ? "border-b-2 border-primary font-bold" : ""}`}>
                3. Review
              </div>
            </div>

            {step === 1 && <CheckoutForm onNext={() => setStep(2)} />}

            {step === 2 && <PaymentMethods onBack={() => setStep(1)} onNext={() => setStep(3)} />}

            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Review Your Order</h2>

                <div className="mb-6">
                  <h3 className="font-medium mb-2">Shipping Address</h3>
                  <div className="text-gray-700">
                    <p>John Doe</p>
                    <p>123 Main Street</p>
                    <p>Kurunegala, North Western Province</p>
                    <p>Sri Lanka</p>
                    <p>+94 76 123 4567</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium mb-2">Payment Method</h3>
                  <div className="text-gray-700">
                    <p>Credit Card (ending in 4242)</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Button onClick={handlePlaceOrder}>Place Order</Button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-1">
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}
