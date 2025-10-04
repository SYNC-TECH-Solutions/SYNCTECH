
'use server';

import type { z } from 'zod';
import { contactFormSchema } from '@/lib/schemas';
import { validateContactForm } from '@/ai/flows/validate-contact-form';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { initializeFirebase } from '@/firebase';

// --- Contact Form Action ---
export type ContactFormValues = z.infer<typeof contactFormSchema>;

const supportEmail = 'synctechire@gmail.com';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

async function saveSubmissionToFirestore(values: ContactFormValues) {
  try {
    const { firestore } = initializeFirebase();
    await addDoc(collection(firestore, "contactform"), {
      ...values,
      submissionDate: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error saving contact form submission to Firestore:', error);
    // We won't block the user for this, just log the error.
  }
}

export async function submitContactForm(values: ContactFormValues) {

  // AI Validation Step
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
  }

  // --- Save to Firestore ---
  await saveSubmissionToFirestore(values);
  
  // --- API Submission for Email ---
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
