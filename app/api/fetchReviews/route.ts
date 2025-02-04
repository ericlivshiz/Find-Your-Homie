import { supabase } from "@/lib/supabaseClient"; // Adjust the path if necessary

// Handle GET request for fetching reviews data
export async function GET(req: Request) {
  try {
    // Fetch data from the "Reviews" table
    const { data: reviewsData, error } = await supabase.from("Reviews").select();

    if (error) {
      // Return a 500 error if there's an issue fetching data
      return new Response(JSON.stringify({ error: (error as any).message }), {
        status: 500,
      });
    }

    // Return the reviews data as a successful response
    return new Response(JSON.stringify({ data: reviewsData }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Handle unexpected errors and return a 500 error
    return new Response(JSON.stringify({ error: (error as any).message }), {
      status: 500,
    });
  }
}
