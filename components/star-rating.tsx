import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  max?: number
}

export function StarRating({ rating, max = 5 }: StarRatingProps) {
  return (
    <div className="flex">
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < Math.floor(rating)
        const half = i === Math.floor(rating) && rating % 1 !== 0

        return (
          <Star
            key={i}
            size={16}
            className={`
              ${filled ? "text-yellow-400 fill-yellow-400" : half ? "text-yellow-400 fill-yellow-400 half-star" : "text-gray-300 dark:text-gray-600"}
            `}
          />
        )
      })}
    </div>
  )
}
