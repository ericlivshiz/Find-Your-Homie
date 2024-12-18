'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { StarRating } from '../../../components/StarRating'
import { ReviewList } from './components/ReviewList'
import { ReviewForm } from './components/ReviewForm'
import { Button } from "@/components/ui/button"
import BlueHeader from '@/components/BlueHeader'

// Mock API function to fetch company data
const fetchCompanyData = async (id: string) => {
  // In a real application, this would be an API call
  const mockData = {
    1: {
      id: 1,
      name: 'Isla Vista Realty',
      averageRating: 4.2,
      totalReviews: 47,
      reviews: [
        { id: 1, author: 'John D.', rating: 5, comment: 'Great service! Found my dream apartment quickly.', date: '2023-05-15' },
        { id: 2, author: 'Sarah M.', rating: 4, comment: 'Good experience overall. Responsive staff.', date: '2023-06-02' },
        { id: 3, author: 'Mike R.', rating: 3, comment: 'Decent options, but could improve communication.', date: '2023-06-20' },
      ]
    },
    2: {
      id: 2,
      name: 'Goleta Living',
      averageRating: 3.8,
      totalReviews: 32,
      reviews: [
        { id: 1, author: 'Emma L.', rating: 4, comment: 'Nice properties, but a bit pricey.', date: '2023-05-20' },
        { id: 2, author: 'Alex K.', rating: 3, comment: 'Average experience. Could be better.', date: '2023-06-10' },
      ]
    }
  };

  return mockData[id] || null;
};

export default function CompanyReviewPage() {
  const params = useParams();
  const companyId = params.companyId as string;

  const [companyData, setCompanyData] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    const loadCompanyData = async () => {
      const data = await fetchCompanyData(companyId);
      setCompanyData(data);
    };
    loadCompanyData();
  }, [companyId]);

  const handleNewReview = (newReview) => {
    // In a real application, you would send this to your backend
    console.log('New review submitted:', newReview);
    setShowReviewForm(false);
    // You would then update the reviews list with the new review
    setCompanyData(prevData => ({
      ...prevData,
      reviews: [
        {
          id: prevData.reviews.length + 1,
          author: 'Anonymous',
          rating: newReview.rating,
          comment: newReview.comment,
          date: new Date().toISOString().split('T')[0]
        },
        ...prevData.reviews
      ],
      totalReviews: prevData.totalReviews + 1,
      averageRating: (prevData.averageRating * prevData.totalReviews + newReview.rating) / (prevData.totalReviews + 1)
    }));
  };

  if (!companyData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <BlueHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-semibold mb-4">{companyData.name}</h2>
          <div className="flex items-center mb-4">
            <StarRating rating={companyData.averageRating} />
            <span className="ml-2 text-gray-600">
              {companyData.averageRating.toFixed(1)} out of 5 ({companyData.totalReviews} reviews)
            </span>
          </div>
          <Button onClick={() => setShowReviewForm(true)}>Write a Review</Button>
        </div>

        {showReviewForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
            <ReviewForm onSubmit={handleNewReview} onCancel={() => setShowReviewForm(false)} />
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Reviews</h3>
          <ReviewList reviews={companyData.reviews} />
        </div>
      </main>

      <footer className="bg-blue-600 text-white py-4 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>Built by Gauchos, for Gauchos.</p>
        </div>
      </footer>
    </div>
  )
}