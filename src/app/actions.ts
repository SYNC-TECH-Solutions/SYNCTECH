
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
  const resend = new Resend(process.env.RESEND_API_KEY);
  
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

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
type LoginFormValues = z.infer<typeof loginFormSchema>;

// This is a placeholder for a real sign-in function that would use the Firebase client SDK
// Since we can't run the client SDK here, this action simulates the ID token generation.
async function getMockIdToken(email: string): Promise<string> {
    // In a real app, you would use signInWithEmailAndPassword from 'firebase/auth' on the client
    // to get the user and then user.getIdToken() to get the ID token.
    // Here, we create a custom token with the Admin SDK to simulate this.
    getFirebaseAdminApp();
    const customToken = await auth().createCustomToken(email, { admin: true });
    return customToken;
}

export async function login(values: LoginFormValues) {
    try {
        const { email } = loginFormSchema.parse(values);
        
        // This is a temporary measure for the server-side action.
        // In a full implementation, the client-side Firebase SDK would handle the sign-in
        // and send an ID token to a server endpoint to create a session cookie.
        const idToken = await getMockIdToken(email);
        
        const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
        
        const sessionCookie = await auth().createSessionCookie(idToken, { expiresIn });
        
        cookies().set('__session', sessionCookie, {
            maxAge: expiresIn,
            httpOnly: true,
            secure: true,
        });
        
        return { success: true };

    } catch (error: any) {
        console.error('Login error:', error);
        
        // Provide more specific error messages for common Firebase auth errors
        let message = 'An unexpected error occurred during login.';
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
            message = 'Invalid email or password. Please try again.';
        }

        return { success: false, message };
    }
}


export async function logout() {
  cookies().delete('__session');
  return { success: true };
}
