"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { StarRating } from "../../../components/StarRating";
import { ReviewList } from "./components/ReviewList";
import { ReviewForm } from "./components/ReviewForm";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import FooterSection from "@/components/footer-section";

export default function CompanyReviewPage() {
  const params = useParams();
  const companyId = parseInt(params.companyId as string, 10);

  const [reviewsData, setReviewsData] = useState<
    {
      id: number;
      created_at: string;
      name: string;
      rating: number;
      message: string;
      company_id: number;
    }[]
  >([]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch data from the API route
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/fetchReviews?company_id=${companyId}`); // Pass companyId as query param
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
  }, [companyId]); // Ensure to refetch if companyId changes

  const handleNewReview = async (newReview) => {
    try {
      const response = await fetch("/api/insertReview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newReview.name || "Anonymous",
          rating: newReview.rating,
          message: newReview.message,
          company_id: companyId,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Review inserted successfully:", result.data);
        setReviewsData((prevReviews) => [newReview, ...prevReviews]);
        setShowReviewForm(false);
      } else {
        console.error("Error inserting review:", result.error);
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-black overflow-x-hidden">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Section: Company Reviews */}
        <div className="bg-gradient-to-b from-slate-900 to-black rounded-xl shadow-lg p-8 mb-10">
          <h2 className="text-4xl font-semibold text-white mb-6">Company Reviews</h2>
          <Button 
            onClick={() => setShowReviewForm(true)} 
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg shadow-md transition duration-200"
          >
            Write a Review
          </Button>
        </div>
  
        {/* Section: Write a Review */}
        {showReviewForm && (
          <div className="bg-gradient-to-br from-slate-900 to-black rounded-xl shadow-lg p-8 mb-10">
            <h3 className="text-2xl font-semibold text-white mb-4">Write a Review</h3>
            <ReviewForm
              onSubmit={handleNewReview}
              onCancel={() => setShowReviewForm(false)}
            />
          </div>
        )}
  
        {/* Section: Reviews */}
        <div className="bg-gradient-to-br from-slate-900 to-black rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-white mb-6">Reviews</h3>
          <ReviewList reviews={reviewsData} />
        </div>
      </main>
  
      <FooterSection />
    </div>
  );
  
}
