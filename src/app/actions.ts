
'use server';

import type { z } from 'zod';
import { contactFormSchema } from '@/lib/schemas';
import { validateContactForm } from '@/ai/flows/validate-contact-form';
import { getFirebaseAdminApp } from '@/lib/firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

// --- Contact Form Action ---
export type ContactFormValues = z.infer<typeof contactFormSchema>;

const supportEmail = 'synctechire@gmail.com';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

async function saveSubmissionToFirestore(values: ContactFormValues) {
    const adminApp = getFirebaseAdminApp();
    if (!adminApp) {
        console.error("Firebase Admin SDK is not initialized. Cannot save to Firestore.");
        // We will still proceed to send the email
        return;
    }

    try {
        const firestore = getFirestore(adminApp);
        const contactFormCollection = firestore.collection("contactform");
        await contactFormCollection.add({
          ...values,
          submissionDate: new Date(), // Use server date
        });
    } catch (error) {
        console.error('Error saving contact form submission to Firestore:', error);
        // This is a server-side error, it should be logged.
        // We don't want to block the user email from being sent.
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

  // --- Save to Firestore (non-blocking on the client, but awaited on server) ---
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
