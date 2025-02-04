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

  const [reviewsData, setReviewsData] = useState<{ id: number; created_at: string; name: string; rating: number; message: string; company_id: number }[]>([]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch data from the API route
    const fetchData = async () => {
      try {
        const res = await fetch("/api/fetchReviews");
        const result = await res.json();
  
        if (res.ok) {
          setReviewsData(result.data); // Store the reviews data in state
        } else {
          setError(result.error || "Something went wrong.");
        }
      } catch (error) {
        setError("Failed to fetch data.");
      }
    };
  
    fetchData();
  }, []);
  

  const handleNewReview = async (newReview) => {
    try {
      const response = await fetch('/api/insertReview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newReview.name || 'Anonymous',
          rating: newReview.rating,
          message: newReview.message,
          company_id: companyId,
        }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        console.log('Review inserted successfully:', result.data);
        setReviewsData(prevReviews => [newReview, ...prevReviews]);
        setShowReviewForm(false);
      } else {
        console.error('Error inserting review:', result.error);
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
          <ReviewList reviews={reviewsData} />
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