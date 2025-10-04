
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/schemas';
import { ContactFormEmail } from '@/components/emails/contact-form-email';
import { getFirebaseAdminApp } from '@/lib/firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

const resend = new Resend(process.env.RESEND_API_KEY);
const supportEmail = 'synctechire@gmail.com';

async function saveSubmissionToFirestore(values: { name: string; email: string; message: string; }) {
    try {
        const adminApp = getFirebaseAdminApp();
        const firestore = getFirestore(adminApp);
        const contactFormCollection = firestore.collection("contactFormSubmissions");
        await contactFormCollection.add({
          ...values,
          submissionDate: new Date(),
        });
    } catch (error) {
        console.error('Error saving contact form submission to Firestore:', error);
        // We re-throw the error to be caught by the main try-catch block
        // so the client receives a proper error response.
        throw new Error('Failed to save submission to database.');
    }
}


export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json({ message: 'Invalid input.', errors: validationResult.error.flatten().fieldErrors }, { status: 400 });
    }
    
    const { name, email, message } = validationResult.data;
    
    // Save to Firestore. This will throw an error on failure.
    await saveSubmissionToFirestore({ name, email, message });

    // If RESEND_API_KEY is not set, log to console instead of sending an email.
    if (!process.env.RESEND_API_KEY) {
        console.log("RESEND_API_KEY is not set. Logging to console instead.");
        console.log("New Contact Form Submission:", { name, email, message });
        return NextResponse.json({ message: 'Message received and saved.' }, { status: 200 });
    }

    // Send email using Resend
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
      // Even if email fails, the data is saved. Let the client know it was partially successful.
      return NextResponse.json({ message: 'Message saved, but failed to send email notice.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Message sent successfully.' }, { status: 200 });

  } catch (error) {
    console.error('API Error: Could not process contact form submission.', error);
    // This will catch errors from saveSubmissionToFirestore or other unexpected issues.
    return NextResponse.json({ message: (error as Error).message || 'An unexpected server error occurred.' }, { status: 500 });
  }
}
