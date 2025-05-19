import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export function FeaturedProducts() {
  // Get only featured products
  const featuredProducts = products.filter((product) => product.featured).slice(0, 8)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
