"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { StarRating } from "@/components/star-rating"
import { ShoppingCart, Heart } from "lucide-react"
import { useCart } from "@/components/cart-provider"

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  rating: number
  reviews: number
  featured?: boolean
  discount?: number
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart({
      ...product,
      quantity: 1,
    })
  }

  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <Link href={`/products/${product.id}`} className="relative block">
        {product.discount && (
          <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}
        <div className="absolute top-2 right-2 z-10">
          <Button variant="ghost" size="icon" className="rounded-full bg-white/80 hover:bg-white">
            <Heart className="h-5 w-5 text-gray-600" />
          </Button>
        </div>
        <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800">
          {/* 
            HOW TO ADD PRODUCT PHOTOS:
            1. Add your product images to the public folder (e.g., public/images/products/)
            2. Update the product.image path in your products data (lib/products.ts)
            3. Example path: "/images/products/smartphone-1.jpg"
            4. Recommended image size: 500x500px or similar aspect ratio
            5. The Image component will automatically handle responsiveness
            6. If no image is provided, it will fall back to the placeholder
          */}
          <Image
            src={product.image || "/placeholder.svg?height=192&width=256"}
            alt={product.name}
            fill
            className="object-contain p-4 transition-transform group-hover:scale-105"
          />
        </div>
      </Link>

      <CardContent className="pt-4 flex-grow">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{product.category}</div>
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="font-medium mb-2 line-clamp-2 hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-2 mb-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
        <div className="font-bold text-lg">Rs. {product.price.toLocaleString()}</div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button className="w-full" onClick={handleAddToCart}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
