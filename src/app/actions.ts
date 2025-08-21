
'use server';

import type { z } from 'zod';
import { contactFormSchema } from '@/lib/schemas';
import { validateContactForm } from '@/ai/flows/validate-contact-form';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/components/emails/contact-form-email';
import * as React from 'react';

// --- Contact Form Action ---
export type ContactFormValues = z.infer<typeof contactFormSchema>;

const supportEmail = 'synctechire@gmail.com';

export async function submitContactForm(values: ContactFormValues) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error('Resend API key is not configured.');
    return {
      success: false,
      message: "The contact form is currently unavailable due to a server configuration issue. Please email us directly."
    };
  }

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
    return { 
      success: false, 
      message: "There was an issue validating your message. Please try again or email us directly at " + supportEmail
    };
  }

  // Email Sending Step
  try {
    const resend = new Resend(resendApiKey);
    
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
    console.error('An unexpected error occurred while sending the email:', error);
    return { 
      success: false, 
      message: "An unexpected server error occurred. Please contact us directly at " + supportEmail
    };
  }
}
