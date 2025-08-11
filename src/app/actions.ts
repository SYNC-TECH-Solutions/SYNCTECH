
"use server";

import type { z } from "zod";
import type { contactFormSchema } from "@/lib/schemas";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { validateContactForm } from "@/ai/flows/validate-contact-form";

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function submitContactForm(values: ContactFormValues) {
  try {
    const aiValidation = await validateContactForm(values);
    if (!aiValidation.isValid) {
      return { success: false, message: `Validation failed: ${aiValidation.reason}` };
    }

    // Add a new document with a generated id.
    await addDoc(collection(db, "messages"), {
      ...values,
      createdAt: serverTimestamp(),
    });

    return { success: true, message: "Thank you for your message! We've received it and will get back to you soon." };
  } catch (error) {
    console.error("Error saving message to Firestore:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}
