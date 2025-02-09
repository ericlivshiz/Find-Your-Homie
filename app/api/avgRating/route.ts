import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient'; // Import your custom supabase client

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const companyId = searchParams.get('companyId');

  if (!companyId) {
    return NextResponse.json({ error: 'Company ID is required' }, { status: 400 });
  }

  try {
    // Fetch all reviews for the given company
    const { data, error } = await supabase
      .from('Reviews')
      .select('rating')
      .eq('company_id', companyId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data || data.length === 0) {
      // If no reviews, return 0 as the average rating
      return NextResponse.json({ averageRating: 0 }, { status: 200 });
    }

    // Calculate the average rating
    const totalRating = data.reduce((acc, review) => acc + review.rating, 0);
    const averageRating = totalRating / data.length;

    // Round to the nearest .5
    const roundedRating = Math.round(averageRating * 2) / 2;

    return NextResponse.json({ averageRating: roundedRating }, { status: 200 });
  } catch (err) {
    console.error('Error fetching ratings:', err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
