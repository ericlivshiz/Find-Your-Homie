import { supabase } from "@/lib/supabaseClient"; // Make sure the path is correct

export async function GET(req: Request) {
  try {
    const username = req.url.split("?username=")[1]; // Extract the username from the URL (GET query param)
    
    if (!username) {
      return new Response(JSON.stringify({ error: "Username is required" }), {
        status: 400,
      });
    }

    // Query to get the user id from the 'User' table based on username
    const { data, error } = await supabase
      .from("User")
      .select("id")
      .eq("username", username)
      .single();

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error fetching user ID" }),
      { status: 500 }
    );
  }
}
