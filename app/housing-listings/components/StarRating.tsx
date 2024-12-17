import { Star, StarHalf } from 'lucide-react'

export function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} className="text-yellow-400 fill-current" />
        } else if (i === fullStars && hasHalfStar) {
          return <StarHalf key={i} className="text-yellow-400 fill-current" />
        } else {
          return <Star key={i} className="text-gray-300" />
        }
      })}
      <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  )
}

