import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { StarRating } from "@/components/star-rating"
import { QuoteIcon } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Chamara Perera",
      avatar: "/placeholder.svg?height=64&width=64",
      rating: 5,
      text: "I've been shopping at Mata Wayamba Electronics for years. Their products are always authentic and the delivery is super fast. Highly recommended!",
    },
    {
      id: 2,
      name: "Dilini Fernando",
      avatar: "/placeholder.svg?height=64&width=64",
      rating: 4.5,
      text: "Great customer service! I had an issue with my order and they resolved it immediately. The prices are also very competitive.",
    },
    {
      id: 3,
      name: "Nuwan Jayawardena",
      avatar: "/placeholder.svg?height=64&width=64",
      rating: 5,
      text: "The online payment system is very secure and easy to use. I received my laptop in perfect condition and exactly as described.",
    },
  ]

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">What Our Customers Say</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Don't just take our word for it, hear from our satisfied customers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <QuoteIcon size={24} />
                </div>
                <p className="mb-6 text-gray-700 dark:text-gray-300">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
