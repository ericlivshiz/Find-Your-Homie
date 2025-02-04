import { supabase } from "@/lib/supabaseClient"; // Ensure the path to supabase client is correct

export async function POST(req: Request) {
  try {
    const { name, rating, message, company_id } = await req.json();

    // Validate the required fields
    if (!name || !rating || !message || !company_id) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Insert the review into the 'Reviews' table
    const { data, error } = await supabase
      .from("Reviews")
      .insert([{ name, rating, message, company_id }]);

    if (error) {
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500 }
      );
    }

    // Return the data of the newly inserted review
    return new Response(
      JSON.stringify({ data }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error inserting review" }),
      { status: 500 }
    );
  }
}
