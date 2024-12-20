import { supabase } from './supabaseClient'; // Adjust path if needed

export const fetchReviewsData = async () => {
    const { data: reviewsData, error } = await supabase.from("Reviews").select();
    if (error) {
      throw new Error(error.message);
    }
    console.log('Reviews data:', reviewsData);
    return reviewsData;
    };

// Call the function when the component loads (for testing)
fetchReviewsData();