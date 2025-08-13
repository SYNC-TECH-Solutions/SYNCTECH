
'use server';

import type { z } from 'zod';
import { contactFormSchema } from '@/lib/schemas';
import { validateContactForm } from '@/ai/flows/validate-contact-form';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/components/emails/contact-form-email';
import * as React from 'react';
import { auth } from 'firebase-admin';
import { cookies } from 'next/headers';
import { getFirebaseAdminApp } from '@/lib/firebase-admin';

// --- Contact Form Action ---
export type ContactFormValues = z.infer<typeof contactFormSchema>;

const supportEmail = 'hello@synctech.ie';

export async function submitContactForm(values: ContactFormValues) {  
  try {
    // 1. Validate the form content with AI
    const validation = await validateContactForm(values);

    if (!validation.isValid) {
      console.warn('AI validation failed:', validation.reason);
      return { 
        success: false, 
        message: "Your message was flagged as suspicious. Please try rephrasing or email us directly." 
      };
    }

    // 2. Send the email using Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: `Contact Form <noreply@synctech.ie>`,
      to: [supportEmail],
      subject: `New Message from ${values.name} via SYNC TECH Website`,
      reply_to: values.email,
      react: ContactFormEmail({
        name: values.name,
        email: values.email,
        message: values.message,
      }) as React.ReactElement,
    });

    if (error) {
      console.error('Resend API error:', error);
      return { 
        success: false, 
        message: "We encountered an issue sending your message. Please try again or email us directly." 
      };
    }

    return { 
      success: true, 
      message: "Thank you for your message! We'll get back to you shortly." 
    };

  } catch (error) {
    console.error('An unexpected error occurred in submitContactForm:', error);
    return { 
      success: false, 
      message: "An unexpected error occurred. Please contact us directly at hello@synctech.ie." 
    };
  }
}


// --- Auth Actions ---

export async function createSession(idToken: string) {
    getFirebaseAdminApp();
    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
    try {
        const sessionCookie = await auth().createSessionCookie(idToken, { expiresIn });
        cookies().set('__session', sessionCookie, {
            maxAge: expiresIn,
            httpOnly: true,
            secure: true,
        });
        return { success: true };
    } catch (error) {
        console.error('Failed to create session:', error);
        return { success: false, message: 'Failed to create session.' };
    }
}


export async function logout() {
  cookies().delete('__session');
  return { success: true };
}
