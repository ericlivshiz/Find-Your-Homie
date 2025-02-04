import { supabase } from "@/lib/supabaseClient"; // Adjust the import path if necessary

export async function GET(req: Request) {
  try {
    // Fetch data from the "Person" table
    const { data: personData, error } = await supabase.from("Person").select();

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    // Send the fetched data as the response
    return new Response(JSON.stringify({ data: personData }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

