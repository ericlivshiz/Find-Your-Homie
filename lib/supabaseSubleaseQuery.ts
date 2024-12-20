import { supabase } from './supabaseClient'; // Adjust path if needed

export const fetchSubleaseData = async () => {
    const { data: subleaseData, error } = await supabase.from("Sublease").select();
    if (error) {
      throw new Error(error.message);
    }
    console.log('Sublease data:', subleaseData);
    return subleaseData;
  };

// Call the function when the component loads (for testing)
fetchSubleaseData();
