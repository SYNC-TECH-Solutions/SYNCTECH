
"use server";

import type { z } from "zod";
import { Resend } from "resend";
import type { contactFormSchema } from "@/lib/schemas";
import { ContactFormEmail } from "@/components/emails/contact-form-email";

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function submitContactForm(values: ContactFormValues) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const emailComponent = ContactFormEmail({ 
        name: values.name,
        email: values.email,
        message: values.message
    });

    const { data, error: emailError } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'synctechire@gmail.com',
      subject: 'New Message from SYNC TECH Website',
      reply_to: values.email,
      react: emailComponent,
    });

    if (emailError) {
      console.error("Error sending email with Resend:", emailError);
      return { success: false, message: "We couldn't send your message. Please try again later." };
    }

    return { success: true, message: "Thank you for your message! We'll get back to you soon." };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}
