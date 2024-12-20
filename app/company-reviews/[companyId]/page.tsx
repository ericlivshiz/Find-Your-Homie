'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { StarRating } from '../../../components/StarRating'
import { ReviewList } from './components/ReviewList'
import { ReviewForm } from './components/ReviewForm'
import { Button } from "@/components/ui/button"
import BlueHeader from '@/components/BlueHeader'
import { fetchReviews } from '@/lib/supabasePersonQuery'
import { supabase } from '@/lib/supabaseClient'

export default function CompanyReviewPage() {
  const params = useParams();
  const companyId = parseInt(params.companyId as string, 10);

  const [reviews, setReviews] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await fetchReviews(companyId);
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    loadReviews();
  }, [companyId]);

  const handleNewReview = async (newReview) => {
    try {
      const { error } = await supabase
        .from('Reviews')
        .insert([{
          name: newReview.name || 'Anonymous',
          rating: newReview.rating,
          message: newReview.message,
          company_id: companyId,
        }]);

      if (error) {
        console.error('Error inserting review:', error);
      } else {
        console.log('Review inserted successfully');
        setReviews(prevReviews => [newReview, ...prevReviews]);
        setShowReviewForm(false);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <BlueHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-semibold mb-4">Company Reviews</h2>
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
          <ReviewList reviews={reviews} />
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