
"use server";

import type { z } from "zod";
import { Resend } from "resend";
import type { contactFormSchema } from "@/lib/schemas";
import { validateContactForm } from "@/ai/flows/validate-contact-form";

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function submitContactForm(values: ContactFormValues) {
  try {
    const aiValidation = await validateContactForm(values);
    if (!aiValidation.isValid) {
      return { success: false, message: `Validation failed: ${aiValidation.reason}` };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const { data, error: emailError } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'synctechire@gmail.com',
      subject: 'New Message from SYNC TECH Website',
      reply_to: values.email,
      html: `
        <div style="font-family: sans-serif; lineHeight: 1.6">
          <h1 style="color: #333">New Contact Form Submission</h1>
          <p>You have received a new message from your website contact form.</p>
          <hr />
          <h2>Message Details:</h2>
          <ul>
            <li><strong>Name:</strong> ${values.name}</li>
            <li><strong>Email:</strong> <a href="mailto:${values.email}">${values.email}</a></li>
          </ul>
          <h3>Message:</h3>
          <p style="white-space: pre-wrap; border: 1px solid #ddd; padding: 15px; border-radius: 5px;">
            ${values.message}
          </p>
          <hr />
          <p style="font-size: 12px; color: #888">This email was sent from the SYNC TECH website.</p>
        </div>
      `,
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
