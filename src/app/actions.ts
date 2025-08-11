
"use server";

import type { z } from "zod";
import { Resend } from "resend";
import { validateContactForm, type ValidateContactFormInput } from "@/ai/flows/validate-contact-form";
import type { contactFormSchema } from "@/lib/schemas";
import { ContactFormEmail } from "@/components/emails/contact-form-email";
import { supabase } from "@/lib/supabase";

export type ContactFormValues = z.infer<typeof contactFormSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(values: ContactFormValues) {
  try {
    // 1. Validate the form content with AI
    const aiValidationResult = await validateContactForm(values as ValidateContactFormInput);
    
    if (!aiValidationResult.isValid) {
      return { success: false, message: aiValidationResult.reason || "Your submission was flagged as invalid. Please review and try again." };
    }

    // 2. Save the validated query to the database
    const { error: dbError } = await supabase.from('queries').insert([
      { name: values.name, email: values.email, message: values.message },
    ]);

    if (dbError) {
      console.error("Error saving to database:", dbError);
      return { success: false, message: "We couldn't save your message. Please try again later." };
    }

    // 3. Send the email notification
    const { data, error: emailError } = await resend.emails.send({
      from: 'SYNC TECH Contact Form <noreply@synctech.ie>',
      to: 'sherazhussainofficial1@gmail.com',
      subject: 'New Message from SYNC TECH Website',
      reply_to: values.email,
      react: ContactFormEmail({ 
        name: values.name,
        email: values.email,
        message: values.message 
      }),
    });

    if (emailError) {
      console.error("Error sending email with Resend:", emailError);
      // Note: The data is saved, but the email failed. You might want to handle this case.
      return { success: false, message: "We couldn't send your message notification, but your query was saved." };
    }

    console.log("Email sent successfully:", data);

    return { success: true, message: "Thank you for your message! We'll get back to you soon." };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}
