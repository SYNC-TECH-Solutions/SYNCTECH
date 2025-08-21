'use server';

/**
 * @fileOverview This file defines a Genkit flow to validate contact form submissions.
 *
 * The flow uses AI to check if the content is valid and appropriate before sending it.
 * - validateContactForm - A function that handles the contact form validation process.
 * - ValidateContactFormInput - The input type for the validateContactForm function.
 * - ValidateContactFormOutput - The return type for the validateContactForm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ValidateContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person submitting the form.'),
  message: z.string().describe('The message content from the contact form.'),
});
export type ValidateContactFormInput = z.infer<typeof ValidateContactFormInputSchema>;

const ValidateContactFormOutputSchema = z.object({
  isValid: z.boolean().describe('Whether the contact form submission is valid.'),
  reason: z.string().optional().describe('The reason the contact form submission is invalid, if applicable.'),
});
export type ValidateContactFormOutput = z.infer<typeof ValidateContactFormOutputSchema>;

export async function validateContactForm(input: ValidateContactFormInput): Promise<ValidateContactFormOutput> {
  return validateContactFormFlow(input);
}

const validateContactFormPrompt = ai.definePrompt({
  name: 'validateContactFormPrompt',
  input: {schema: ValidateContactFormInputSchema},
  output: {schema: ValidateContactFormOutputSchema},
  prompt: `You are an AI assistant that validates contact form submissions for a tech company called SYNC TECH.

  Your task is to determine if the following submission is a legitimate inquiry about the company's services (e.g., web development, AI, cybersecurity).

  The message should be business-related. You must REJECT messages that are clearly spam, direct advertising solicitations, personal messages, or malicious content. However, be lenient with messages that are simply short or poorly worded, as they may still be genuine leads.

  If the submission is invalid, provide a brief reason (e.g., "Spam content," "Advertising," "Malicious link detected").

  Submission Details:
  - Name: {{{name}}}
  - Email: {{{email}}}
  - Message: {{{message}}}

  Return your response as a JSON object with 'isValid' (true/false) and an optional 'reason'.
  `,
});

const validateContactFormFlow = ai.defineFlow(
  {
    name: 'validateContactFormFlow',
    inputSchema: ValidateContactFormInputSchema,
    outputSchema: ValidateContactFormOutputSchema,
  },
  async input => {
    const {output} = await validateContactFormPrompt(input);
    return output!;
  }
);
