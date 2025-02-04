import { supabase } from "@/lib/supabaseClient"; // Adjust path if needed

export async function GET(req: Request) {
  try {
    // Extract the company_id from query params (from URL)
    const url = new URL(req.url);
    const companyId = url.searchParams.get("company_id");

    if (!companyId) {
      return new Response(JSON.stringify({ error: "company_id is required" }), {
        status: 400,
      });
    }

    // Fetch reviews data with a filter for company_id
    const { data: reviewsData, error } = await supabase
      .from("Reviews")
      .select()
      .eq("company_id", companyId); // Only fetch reviews with the matching company_id

    if (error) {
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
    return new Response(JSON.stringify({ error: (error as any).message }), {
      status: 500,
    });
  }
}
