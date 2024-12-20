import { supabase } from './supabaseClient'; // Adjust path if needed

export const fetchPersonData = async () => {
    const { data: personData, error } = await supabase.from("Person").select();
    if (error) {
      throw new Error(error.message);
    }
    console.log('Person data:', personData);
    return personData;
  };

export const fetchReviews = async (companyId: number) => {
  const { data: reviews, error } = await supabase
    .from('Reviews')
    .select('id, name, rating, message, created_at')
    .eq('company_id', companyId);

  if (error) {
    throw new Error(error.message);
  }
  console.log('Reviews data:', reviews);
  return reviews;
};

// Call the function when the component loads (for testing)
fetchPersonData();
