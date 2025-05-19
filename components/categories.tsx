import Link from "next/link"
import Image from "next/image"
import { categories } from "@/lib/categories"

export function Categories() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.slug}`} className="group">
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Image
                    src={category.image || "/placeholder.svg?height=96&width=96"}
                    alt={category.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-center font-medium group-hover:text-primary transition-colors">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
