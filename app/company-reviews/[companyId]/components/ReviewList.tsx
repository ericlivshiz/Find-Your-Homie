import { StarRating } from '../../../../components/StarRating'

interface Review {
  id: number
  name: string
  rating: number
  message: string
  created_at: string
}

interface ReviewListProps {
  reviews: Review[]
}

export function ReviewList({ reviews }: ReviewListProps) {
  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="border-b border-gray-200 pb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <StarRating rating={review.rating} size={16} />
              <span className="ml-2 font-semibold">{review.name}</span>
            </div>
            <span className="text-sm text-gray-500">{new Date(review.created_at).toLocaleDateString()}</span>
          </div>
          <p className="text-gray-700">{review.message}</p>
        </div>
      ))}
    </div>
  )
}