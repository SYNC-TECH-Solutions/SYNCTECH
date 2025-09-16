
'use server';

import type { z } from 'zod';
import { contactFormSchema } from '@/lib/schemas';
import { validateContactForm } from '@/ai/flows/validate-contact-form';

// --- Contact Form Action ---
export type ContactFormValues = z.infer<typeof contactFormSchema>;

const supportEmail = 'synctechire@gmail.com';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export async function submitContactForm(values: ContactFormValues) {

  // AI Validation Step (optional but recommended)
  try {
    const validation = await validateContactForm(values);
    if (!validation.isValid) {
      console.warn('AI validation failed:', validation.reason);
      return { 
        success: false, 
        message: "Your message was flagged as suspicious. Please try rephrasing or email us directly." 
      };
    }
  } catch (error) {
    console.error('An unexpected error occurred during AI validation:', error);
    // We can choose to proceed even if validation fails, or return an error.
    // For now, we'll log it and continue.
  }

  // --- API Submission Step ---
  try {
    const response = await fetch(`${siteUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

    if (!response.ok) {
        const errorData = await response.json();
        console.error('API submission error:', errorData);
        return { 
            success: false, 
            message: errorData.message || "We encountered an issue submitting your message. Please try again."
        };
    }
    
    return { 
      success: true, 
      message: "Thank you for your message! We'll get back to you shortly." 
    };

  } catch (error) {
    console.error('An unexpected error occurred while submitting the form:', error);
    return { 
      success: false, 
      message: "An unexpected server error occurred. Please contact us directly at " + supportEmail
    };
  }
}
