
"use server";

import type { z } from "zod";
import type { contactFormSchema } from "@/lib/schemas";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function submitContactForm(values: ContactFormValues) {
  try {
    // Add a new document with a generated id.
    await addDoc(collection(db, "messages"), {
      ...values,
      createdAt: serverTimestamp(),
    });

    return { success: true, message: "Thank you for your message! We've received it and will get back to you soon." };

  } catch (error) {
    console.error("Error submitting contact form:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { success: false, message: `An unexpected error occurred: ${errorMessage}. Please try again later.` };
  }
}
