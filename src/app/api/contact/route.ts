
import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/schemas';
import { getFirebaseAdminApp } from '@/lib/firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

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

    // 2. Process the data (save to your database)
    // =======================================================================
    // This example saves the submission to a Firebase Firestore collection.
    // Ensure your Firebase Admin SDK is configured via environment variables.
    const adminApp = getFirebaseAdminApp();
    if (adminApp) {
      const db = getFirestore(adminApp);
      await db.collection('contactSubmissions').add({
        name,
        email,
        message,
        submittedAt: new Date(),
      });
    } else {
        // Fallback for local development if Firebase isn't set up.
        console.log("Firebase Admin not initialized. Logging to console instead.");
        console.log("New Contact Form Submission:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
    }
    // =======================================================================

    // 3. Return a success response
    return NextResponse.json({ message: 'Message received successfully.' }, { status: 200 });

  } catch (error) {
    console.error('API Error: Could not process contact form submission.', error);
    return NextResponse.json({ message: 'An unexpected server error occurred.' }, { status: 500 });
  }
}
