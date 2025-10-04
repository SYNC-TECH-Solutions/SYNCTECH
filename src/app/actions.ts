'use server';

import { z } from 'zod';
import { contactFormSchema } from '@/lib/schemas';

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

// This server action now only validates the form data and returns it.
// The client will handle the Firestore interaction.
export async function submitContactForm(
  prevState: ContactFormState, 
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: "Invalid form data.",
      issues: validatedFields.error.flatten().fieldErrors.root,
      success: false,
    };
  }

  // Instead of writing to Firestore here, we return the validated data to the client.
  // The client-side code will then handle the Firestore 'addDoc' operation.
  return { 
    message: 'Submission successful!',
    fields: {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        message: validatedFields.data.message
    },
    success: true,
  };
}
