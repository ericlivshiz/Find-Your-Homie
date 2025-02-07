"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ReviewList } from "./components/ReviewList";
import { ReviewForm } from "./components/ReviewForm";
import Header from "@/components/Header";
import FooterSection from "@/components/footer-section";

// Mock companies list for demonstration
const companies = [
  { id: 1, name: "IV Properties" },
  { id: 2, name: "Wolfe & Associates" },
  { id: 3, name: "Playa Life I.V." },
  { id: 4, name: "Meridian Group"}
  // Add more companies as needed
];

export default function CompanyReviewPage() {
  const params = useParams();
  const companyId = parseInt(params.companyId as string, 10);
  const router = useRouter(); // Hook for routing

  const [reviewsData, setReviewsData] = useState<{
    id: number;
    created_at: string;
    name: string;
    rating: number;
    message: string;
    company_id: number;
  }[]>([]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [error, setError] = useState("");

  const [currentCompanyIndex, setCurrentCompanyIndex] = useState(companies.findIndex(company => company.id === companyId));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/fetchReviews?company_id=${companyId}`);
        const result = await res.json();

        if (res.ok) {
          setReviewsData(result.data);
        } else {
          setError(result.error || "Something went wrong.");
        }
      } catch (error) {
        setError("Failed to fetch data.");
      }
    };

    fetchData();
  }, [companyId]);

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
        setReviewsData((prevReviews) => [newReview, ...prevReviews]);
        setShowReviewForm(false);
      } else {
        console.error("Error inserting review:", result.error);
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const handleCompanyChange = (index: number) => {
    setCurrentCompanyIndex(index);
    router.push(`/company-reviews/${companies[index].id}`); // Update URL based on selected company
  };

  const goToNextCompany = () => {
    if (currentCompanyIndex < companies.length - 1) {
      handleCompanyChange(currentCompanyIndex + 1);
    }
  };

  const goToPreviousCompany = () => {
    if (currentCompanyIndex > 0) {
      handleCompanyChange(currentCompanyIndex - 1);
    }
  };

  const routeToHousingListings = () => {
    router.push("/housing-listings");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-black overflow-x-hidden">
      <Header />

      {/* Back Button positioned at the top */}
      <div className="container mx-auto px-6 py-4 flex justify-start mb-8">
        <Button 
          onClick={routeToHousingListings}  // Go back to the previous page
          className="bg-blue-600 hover:bg-blue-700 font-semibold text-white px-6 py-3 rounded-lg shadow-md transition duration-200"
        >
          ← Back to Listings
        </Button>
      </div>

      <main className="container mx-auto px-6 py-12">
        {/* Company Selection Buttons */}
        <div className="bg-gradient-to-b from-slate-900 to-black rounded-xl shadow-lg p-8 mb-10 flex flex-col items-center space-y-4">
          <h2 className="text-4xl font-semibold text-white mb-4">Company Reviews</h2>
          <div className="flex space-x-4">
            <Button 
              onClick={goToPreviousCompany}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full shadow-md"
            >
              ←
            </Button>

            {companies.map((company, index) => (
              <Button 
                key={company.id}
                onClick={() => handleCompanyChange(index)}
                className={`bg-slate-800 hover:bg-slate-900 text-white font-semibold px-6 py-3 mx-2 rounded-lg shadow-md ${index === currentCompanyIndex ? "bg-blue-600" : ""}`}
              >
                {company.name}
              </Button>
            ))}

            <Button 
              onClick={goToNextCompany}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full shadow-md"
            >
              →
            </Button>
          </div>

          <Button 
            onClick={() => setShowReviewForm(true)} 
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-200 mt-4"
          >
            Write a Review
          </Button>
        </div>

        {/* Section for writing a review */}
        {showReviewForm && (
          <div className="bg-gradient-to-br from-slate-900 to-black rounded-xl shadow-lg p-8 mb-10">
            <h3 className="text-2xl font-semibold text-white mb-4">Write a Review</h3>
            <ReviewForm
              onSubmit={handleNewReview}
              onCancel={() => setShowReviewForm(false)}
            />
          </div>
        )}

        {/* Reviews Section */}
        <div className="bg-gradient-to-br from-slate-900 to-black rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-white mb-6">Reviews</h3>
          <ReviewList reviews={reviewsData} />
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
