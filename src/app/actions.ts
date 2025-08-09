
"use server";

import type { z } from "zod";
import { validateContactForm, type ValidateContactFormInput } from "@/ai/flows/validate-contact-form";
import type { contactFormSchema } from "@/lib/schemas";

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function submitContactForm(values: ContactFormValues) {
  try {
    const aiValidationResult = await validateContactForm(values as ValidateContactFormInput);
    
    if (!aiValidationResult.isValid) {
      return { success: false, message: aiValidationResult.reason || "Your submission was flagged as invalid. Please review and try again." };
    }

    // Here you would typically handle the validated data,
    // e.g., send an email, save to a database.
    console.log("Form submitted successfully:", values);
    
    // Simulate sending email
    console.log(`Simulating sending email to sherazhussainofficial1@gmail.com from hello@synctech.ie`);
    console.log(`Email content:`, {
      from: values.email,
      name: values.name,
      message: values.message,
    });


    return { success: true, message: "Thank you for your message! We'll get back to you soon." };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}
