import { supabase } from "@/lib/supabaseClient"; // Adjust path if needed

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json(); // Get name, email, and message from the request body

    // Validate the email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid Email" }), {
        status: 400,
      });
    }

    // Insert the message into the "GetInTouch" table
    const { data, error } = await supabase
      .from("GetInTouch")
      .insert([{ name, email, message }]);

    if (error) {
      throw new Error(error.message);
    }

    // Return success
    return new Response(
      JSON.stringify({ message: "Message sent successfully", data }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error inserting message:", error);
    return new Response(
      JSON.stringify({ error: "Something went wrong while sending your message" }),
      { status: 500 }
    );
  }
}
