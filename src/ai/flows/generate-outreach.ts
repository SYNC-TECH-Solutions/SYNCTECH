'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating outreach materials.
 *
 * The flow uses AI to create a personalized cold email and a call script
 * for a potential business lead.
 * - generateOutreach - The function that handles the outreach generation process.
 * - GenerateOutreachInput - The input type for the generateOutreach function.
 * - GenerateOutreachOutput - The return type for the generateOutreach function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateOutreachInputSchema = z.object({
  businessName: z.string().describe('The name of the business to contact.'),
  businessType: z.string().describe('The type of business (e.g., "cafe", "law firm").'),
  opportunity: z.string().describe("The specific reason or opportunity for reaching out (e.g., 'Outdated website design', 'No online booking system')."),
});
export type GenerateOutreachInput = z.infer<typeof GenerateOutreachInputSchema>;


const GenerateOutreachOutputSchema = z.object({
  coldEmailSubject: z.string().describe('A compelling subject line for a cold email.'),
  coldEmailBody: z.string().describe('The full, personalized body of the cold email. It should be friendly, professional, and directly address the opportunity.'),
  callScript: z.string().describe('A short, friendly, and effective script for a follow-up phone call. It should include an introduction, the reason for the call, and a clear call to action.'),
});
export type GenerateOutreachOutput = z.infer<typeof GenerateOutreachOutputSchema>;

export async function generateOutreach(input: GenerateOutreachInput): Promise<GenerateOutreachOutput> {
  return generateOutreachFlow(input);
}

const generateOutreachPrompt = ai.definePrompt({
  name: 'generateOutreachPrompt',
  input: {schema: GenerateOutreachInputSchema},
  output: {schema: GenerateOutreachOutputSchema},
  prompt: `You are an expert business development representative for SYNC TECH, a tech company that provides high-quality, affordable web development, AI automation, and cybersecurity.

Your task is to generate a personalized cold email and a brief, friendly phone call script to a potential lead.

The tone should be professional, helpful, and not overly salesy. The goal is to start a conversation about how SYNC TECH can help their business.

Lead Information:
- Business Name: {{{businessName}}}
- Business Type: {{{businessType}}}
- Key Opportunity: {{{opportunity}}}

Instructions:
1.  **Cold Email Subject:** Create a concise, attention-grabbing subject line that feels personal and relevant.
2.  **Cold Email Body:**
    -   Address the business by name.
    -   Briefly introduce yourself and SYNC TECH.
    -   Directly and politely reference the specific opportunity you identified (e.g., "I noticed your website could be enhanced...").
    -   Clearly state the value proposition: how SYNC TECH's affordable, high-quality services can solve their problem.
    -   End with a clear, low-pressure call to action (e.g., asking for a brief 15-minute chat).
    -   Keep it concise and easy to read.
3.  **Call Script:**
    -   Create a short opening for a follow-up call.
    -   It should quickly introduce who you are and why you're calling, referencing the email you sent.
    -   The goal is to book a meeting, not to sell over the phone.

Adhere strictly to the output schema.
`,
});

const generateOutreachFlow = ai.defineFlow(
  {
    name: 'generateOutreachFlow',
    inputSchema: GenerateOutreachInputSchema,
    outputSchema: GenerateOutreachOutputSchema,
  },
  async input => {
    const {output} = await generateOutreachPrompt(input);
    return output!;
  }
);
