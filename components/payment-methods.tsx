"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CreditCard, Landmark, Truck } from "lucide-react"

interface PaymentMethodsProps {
  onBack: () => void
  onNext: () => void
}

export function PaymentMethods({ onBack, onNext }: PaymentMethodsProps) {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Payment Method</h2>

      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4 mb-6">
        <div className="flex items-start space-x-2 border rounded-lg p-4">
          <RadioGroupItem value="credit-card" id="credit-card" className="mt-1" />
          <div className="flex-1">
            <div className="flex items-center">
              <Label htmlFor="credit-card" className="font-medium flex items-center">
                <CreditCard className="mr-2 h-5 w-5" />
                Credit / Debit Card
              </Label>
            </div>

            {paymentMethod === "credit-card" && (
              <div className="mt-4 space-y-4">
                <div>
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="1234 5678 9012 3456" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="card-name">Name on Card</Label>
                  <Input id="card-name" placeholder="John Doe" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-start space-x-2 border rounded-lg p-4">
          <RadioGroupItem value="bank-transfer" id="bank-transfer" className="mt-1" />
          <div className="flex-1">
            <div className="flex items-center">
              <Label htmlFor="bank-transfer" className="font-medium flex items-center">
                <Landmark className="mr-2 h-5 w-5" />
                Bank Transfer
              </Label>
            </div>

            {paymentMethod === "bank-transfer" && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Please transfer the total amount to the following bank account:
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
                  <p className="mb-1">
                    <span className="font-medium">Bank:</span> Bank of Ceylon
                  </p>
                  <p className="mb-1">
                    <span className="font-medium">Account Name:</span> Mata Wayamba Electronics
                  </p>
                  <p className="mb-1">
                    <span className="font-medium">Account Number:</span> 1234567890
                  </p>
                  <p>
                    <span className="font-medium">Branch:</span> Kurunegala
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-start space-x-2 border rounded-lg p-4">
          <RadioGroupItem value="cash-on-delivery" id="cash-on-delivery" className="mt-1" />
          <div className="flex-1">
            <div className="flex items-center">
              <Label htmlFor="cash-on-delivery" className="font-medium flex items-center">
                <Truck className="mr-2 h-5 w-5" />
                Cash on Delivery
              </Label>
            </div>

            {paymentMethod === "cash-on-delivery" && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pay with cash upon delivery. Please note that our delivery person will have limited change available.
                </p>
              </div>
            )}
          </div>
        </div>
      </RadioGroup>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit">Continue to Review</Button>
      </div>
    </form>
  )
}
