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
  prompt: `You are an AI assistant that validates contact form submissions for a tech company called SYNC TECH in Dublin, Ireland.

  Evaluate the following contact form submission and determine if it is valid and appropriate. Consider factors such as:
  - Presence of spam or irrelevant content
  - Offensive or inappropriate language
  - Data anomalies or inconsistencies

  If the submission is not valid, provide a reason in the 'reason' field.

  Here is the contact form submission:
  Name: {{{name}}}
  Email: {{{email}}}
  Message: {{{message}}}

  Return a JSON object with 'isValid' set to true or false, and 'reason' explaining why if not valid.
  Follow the schema description for ValidateContactFormOutputSchema.
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
