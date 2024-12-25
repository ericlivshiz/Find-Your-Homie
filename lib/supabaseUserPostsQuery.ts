import { supabase } from './supabaseClient'; // Adjust path if needed

export const fetchUserPostsData = async () => {
    const { data: userPostsData, error } = await supabase.from("").select();
    if (error) {
      throw new Error(error.message);
    }
    console.log('User posts data:', userPostsData);
    return userPostsData;
  };

// Call the function when the component loads (for testing)
fetchUserPostsData();