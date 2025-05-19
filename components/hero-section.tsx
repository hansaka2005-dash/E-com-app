import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Latest Electronics at Your Fingertips</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
              Discover premium electronics with island-wide delivery and secure online payments. Your trusted tech
              partner in Sri Lanka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/products">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Latest electronics"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Special Offer</div>
              <div className="text-xl font-bold text-primary">Up to 25% Off</div>
              <div className="text-sm">On selected items</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
