"use client"

import { useCart } from "@/components/cart-provider"
import Image from "next/image"

export function OrderSummary() {
  const { cart } = useCart()

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 500 : 0
  const total = subtotal + shipping

  return (
    <div className="border rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>

      <div className="space-y-4 mb-6">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src={item.image || "/placeholder.svg?height=64&width=64"}
                alt={item.name}
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-medium line-clamp-1">{item.name}</h4>
              <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
              <div className="font-medium">Rs. {(item.price * item.quantity).toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4 space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>Rs. {subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Rs. {shipping.toLocaleString()}</span>
        </div>
        <div className="border-t pt-3 font-bold flex justify-between">
          <span>Total</span>
          <span>Rs. {total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}
