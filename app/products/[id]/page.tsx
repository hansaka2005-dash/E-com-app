"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { products } from "@/lib/products"
import { StarRating } from "@/components/star-rating"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductGallery } from "@/components/product-gallery"
import { RelatedProducts } from "@/components/related-products"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  // In a real app, you would fetch this data from an API
  const product = products.find((p) => p.id === params.id) || products[0]

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductGallery images={product.images} />

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <StarRating rating={product.rating} />
            <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
          </div>

          <div className="text-2xl font-bold mb-6">Rs. {product.price.toLocaleString()}</div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-md">
              <button className="px-3 py-2 border-r" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button className="px-3 py-2 border-l" onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>

            <Button onClick={handleAddToCart} className="flex-1">
              Add to Cart
            </Button>
          </div>

          <div className="border-t pt-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="font-semibold">Availability:</div>
              <div className="text-green-600">In Stock</div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="font-semibold">Category:</div>
              <div>{product.category}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-semibold">SKU:</div>
              <div>{product.sku}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="p-4">
            <p>{product.fullDescription}</p>
          </TabsContent>
          <TabsContent value="specifications" className="p-4">
            <table className="w-full border-collapse">
              <tbody>
                {product.specifications?.map((spec, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="py-2 px-4 border font-medium">{spec.name}</td>
                    <td className="py-2 px-4 border">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabsContent>
          <TabsContent value="reviews" className="p-4">
            <div className="space-y-4">
              {product.reviewsList?.map((review, index) => (
                <div key={index} className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <StarRating rating={review.rating} />
                    <span className="font-medium">{review.author}</span>
                  </div>
                  <p>{review.comment}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <RelatedProducts category={product.category} currentProductId={product.id} />
      </div>
    </div>
  )
}
