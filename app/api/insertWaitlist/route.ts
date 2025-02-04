import { supabase } from "@/lib/supabaseClient"; // Adjust path if needed

export async function POST(req: Request) {
  try {
    const { email } = await req.json(); // Get the email from the request body

    // Validate the email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid Email" }), {
        status: 400,
      });
    }

    // Insert email into the waitlist
    const { data, error } = await supabase
      .from("Waitlist")
      .insert([{ email }]);

    if (error) {
      throw new Error(error.message);
    }

    // Return success
    return new Response(
      JSON.stringify({ message: "Successfully added to waitlist", data }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error inserting data:", error);
    return new Response(
      JSON.stringify({ error: "Something went wrong while joining the waitlist" }),
      { status: 500 }
    );
  }
}
