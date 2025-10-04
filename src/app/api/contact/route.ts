
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/schemas';
import { ContactFormEmail } from '@/components/emails/contact-form-email';
import { getFirebaseAdminApp } from '@/lib/firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

const resend = new Resend(process.env.RESEND_API_KEY);
const supportEmail = 'synctechire@gmail.com';

async function saveSubmissionToFirestore(values: { name: string; email: string; message: string; }) {
    const adminApp = getFirebaseAdminApp();
    if (!adminApp) {
        console.error("Firebase Admin SDK is not initialized. Cannot save to Firestore.");
        return; // Don't block email sending
    }

    try {
        const firestore = getFirestore(adminApp);
        const contactFormCollection = firestore.collection("contactform");
        await contactFormCollection.add({
          ...values,
          submissionDate: new Date(), // Use server date
        });
    } catch (error) {
        console.error('Error saving contact form submission to Firestore:', error);
        // This is a server-side error, it should be logged.
        // We don't want to block the user email from being sent.
    }
}


/**
 * API route handler for contact form submissions.
 * Saves to Firestore and sends an email notification.
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
    
    // 2. Save submission to Firestore (non-blocking for the response)
    // We don't await this so the email can be sent immediately
    saveSubmissionToFirestore({ name, email, message });

    // 3. Handle email sending
    if (!process.env.RESEND_API_KEY) {
        console.log("RESEND_API_KEY is not set. Logging to console instead.");
        console.log("New Contact Form Submission:", { name, email, message });
        return NextResponse.json({ message: 'Message received (logged to console).' }, { status: 200 });
    }

    const { data, error } = await resend.emails.send({
      from: `SYNC TECH Contact Form <onboarding@resend.dev>`,
      to: [supportEmail],
      reply_to: email,
      subject: `New Message from ${name} via SYNC TECH`,
      react: ContactFormEmail({ name, email, message }),
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ message: 'Failed to send message.', error }, { status: 500 });
    }

    // 4. Return a success response
    return NextResponse.json({ message: 'Message sent successfully.' }, { status: 200 });

  } catch (error) {
    console.error('API Error: Could not process contact form submission.', error);
    return NextResponse.json({ message: 'An unexpected server error occurred.' }, { status: 500 });
  }
}
