
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/schemas';
import { ContactFormEmail } from '@/components/emails/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);
const supportEmail = 'synctechire@gmail.com';

/**
 * API route handler for contact form submissions.
 * Sends an email notification using Resend.
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
    
    if (!process.env.RESEND_API_KEY) {
        console.log("RESEND_API_KEY is not set. Logging to console instead.");
        console.log("New Contact Form Submission:", { name, email, message });
        // In a real scenario, you might want to return an error or handle this differently
        return NextResponse.json({ message: 'Message received (logged to console).' }, { status: 200 });
    }


    // 2. Send the email using Resend
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

    // 3. Return a success response
    return NextResponse.json({ message: 'Message sent successfully.' }, { status: 200 });

  } catch (error) {
    console.error('API Error: Could not process contact form submission.', error);
    return NextResponse.json({ message: 'An unexpected server error occurred.' }, { status: 500 });
  }
}
