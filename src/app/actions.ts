'use server';

import type { z } from 'zod';
import { contactFormSchema } from '@/lib/schemas';

export type ContactFormValues = z.infer<typeof contactFormSchema>;

/**
 * This is a placeholder function that simulates a form submission failure.
 * It immediately returns a specific error message to the user,
 * guiding them to contact via email.
 */
export async function submitContactForm(values: ContactFormValues) {
  console.log('Contact form submission received for:', values.email);
  console.log('Returning predefined error message as requested.');
  
  return { 
    success: false, 
    message: "Due to some reason we cannot send your message. Kindly contact us at hello@synctech.ie" 
  };
}
