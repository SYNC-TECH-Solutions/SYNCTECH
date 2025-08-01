"use server";

import { z } from "zod";
import { validateContactForm, type ValidateContactFormInput } from "@/ai/flows/validate-contact-form";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

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

    return { success: true, message: "Thank you for your message! We'll get back to you soon." };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}
