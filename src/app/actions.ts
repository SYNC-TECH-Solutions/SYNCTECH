
'use server';

import type { z } from 'zod';
import { contactFormSchema, loginFormSchema } from '@/lib/schemas';
import { validateContactForm } from '@/ai/flows/validate-contact-form';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/components/emails/contact-form-email';
import { LoginLinkEmail } from '@/components/emails/login-link-email';
import * as React from 'react';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

// --- Contact Form Action ---
export type ContactFormValues = z.infer<typeof contactFormSchema>;

const supportEmail = process.env.FORWARDING_EMAIL || 'synctechire@gmail.com';

export async function submitContactForm(values: ContactFormValues) {  
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const validation = await validateContactForm(values);

    if (!validation.isValid) {
      console.warn('AI validation failed:', validation.reason);
      return { 
        success: false, 
        message: "Your message was flagged as suspicious. Please try rephrasing or email us directly." 
      };
    }

    const { data, error } = await resend.emails.send({
      from: `SYNC TECH Contact Form <onboarding@resend.dev>`,
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
      message: "An unexpected error occurred. Please contact us directly at " + supportEmail
    };
  }
}


// --- Auth Actions ---

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "sherazhussainofficial1@gmail.com";
const JWT_SECRET = process.env.JWT_SECRET || "your-super-secret-and-long-jwt-secret";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export async function sendLoginLink(values: z.infer<typeof loginFormSchema>) {
    if (values.email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
        // To prevent user enumeration, we'll return a success message even if the email is wrong.
        console.log(`Login attempt for non-admin email: ${values.email}`);
        return { success: true, message: "If your email is registered, you will receive a login link shortly." };
    }

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        const token = jwt.sign({ email: values.email }, JWT_SECRET, { expiresIn: '15m' });
        const loginUrl = `${SITE_URL}/auth/callback?token=${token}`;

        const { error } = await resend.emails.send({
            from: 'SYNC TECH Admin Login <onboarding@resend.dev>',
            to: [ADMIN_EMAIL],
            subject: 'Your Secure Login Link for SYNC TECH',
            react: LoginLinkEmail({ loginUrl }) as React.ReactElement,
        });

        if (error) {
            console.error('Resend API error (Login Link):', error);
            return { success: false, message: 'Could not send login link. Please try again later.' };
        }
        
        return { success: true, message: "If your email is registered, you will receive a login link shortly." };

    } catch (error) {
        console.error('An unexpected error occurred in sendLoginLink:', error);
        return { success: false, message: 'An unexpected server error occurred.' };
    }
}

export async function verifyLoginToken(token: string) {
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { email: string };
        
        if (decoded.email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
            return { success: false, message: 'Invalid token.' };
        }

        const sessionExpires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
        const sessionData = {
            isLoggedIn: true,
            email: decoded.email,
            expires: sessionExpires.getTime()
        };

        cookies().set('__session', JSON.stringify(sessionData), {
            expires: sessionExpires,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            sameSite: 'lax',
        });
        
        return { success: true };

    } catch (error) {
        console.error("JWT verification error:", error);
        return { success: false, message: 'Login link is invalid or has expired.' };
    }
}


export async function logout() {
  cookies().set('__session', '', { expires: new Date(0), path: '/' });
  return { success: true };
}
