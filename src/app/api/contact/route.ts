
import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/schemas';

/**
 * API route handler for contact form submissions.
 * @param request - The incoming POST request.
 * @returns A JSON response indicating success or failure.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate the incoming data
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json({ message: 'Invalid input.', errors: validationResult.error.flatten().fieldErrors }, { status: 400 });
    }
    
    const { name, email, message } = validationResult.data;

    // 2. Process the data (e.g., save to your database)
    // =======================================================================
    // TODO: Add your logic here to store the submission in your admin portal's database.
    // For example, using Prisma, Supabase, or another database client.
    console.log("New Contact Form Submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // =======================================================================

    // 3. Return a success response
    return NextResponse.json({ message: 'Message received successfully.' }, { status: 200 });

  } catch (error) {
    console.error('API Error: Could not process contact form submission.', error);
    return NextResponse.json({ message: 'An unexpected server error occurred.' }, { status: 500 });
  }
}
