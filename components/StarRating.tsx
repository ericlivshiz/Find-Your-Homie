import { Star, StarHalf } from 'lucide-react'

interface StarRatingProps {
  rating: number
  size?: number
}

export function StarRating({ rating, size = 20 }: StarRatingProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} size={size} className="text-yellow-400 fill-current" />
        } else if (i === fullStars && hasHalfStar) {
          return <StarHalf key={i} size={size} className="text-yellow-400 fill-current" />
        } else {
          return <Star key={i} size={size} className="text-gray-300" />
        }
      })}
    </div>
  )
}