
'use server';

/**
 * @fileOverview This file defines a Genkit flow for finding business leads.
 *
 * The flow uses AI to identify potential business leads based on a specified
 * business type and location. It returns a structured list of leads.
 * - findBusinessLeads - The function that handles the lead generation process.
 * - FindBusinessLeadsInput - The input type for the findBusinessLeads function.
 * - FindBusinessLeadsOutput - The return type for the findBusinessLeads function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FindBusinessLeadsInputSchema = z.object({
  businessType: z.string().describe('The type of business to search for (e.g., "cafes", "solicitors").'),
  location: z.string().describe('The location to search in (e.g., "Dublin", "Cork").'),
});
export type FindBusinessLeadsInput = z.infer<typeof FindBusinessLeadsInputSchema>;

const LeadSchema = z.object({
    name: z.string().describe('The name of the business.'),
    address: z.string().describe('The full physical address of the business.'),
    phone: z.string().optional().describe('The contact phone number for the business.'),
    email: z.string().optional().describe('The contact email address for the business.'),
    website: z.string().optional().describe('The business website URL.'),
    reason: z.string().describe("A brief, compelling reason why this business is a good lead for SYNC TECH's services (e.g., 'Outdated website design', 'No online booking system', 'Poor mobile experience')."),
    description: z.string().describe('A short description of the business.'),
});


const FindBusinessLeadsOutputSchema = z.object({
  leads: z.array(LeadSchema).describe('An array of potential business leads.'),
});
export type FindBusinessLeadsOutput = z.infer<typeof FindBusinessLeadsOutputSchema>;

export async function findBusinessLeads(input: FindBusinessLeadsInput): Promise<FindBusinessLeadsOutput> {
  return findBusinessLeadsFlow(input);
}

const findLeadsPrompt = ai.definePrompt({
  name: 'findLeadsPrompt',
  input: {schema: FindBusinessLeadsInputSchema},
  output: {schema: FindBusinessLeadsOutputSchema},
  prompt: `You are an expert lead generation specialist for a tech company called SYNC TECH. SYNC TECH provides high-quality, affordable web development, AI automation, and cybersecurity services.

Your task is to find potential business leads in a specific location. These businesses might have an outdated website, no website at all, poor reviews related to their online presence, or could clearly benefit from AI automation (e.g., a restaurant without an online booking system).

Find a list of potential leads based on the following criteria:
Business Type: {{{businessType}}}
Location: {{{location}}}

For each lead, provide the business name, its full address, phone number, email address, website URL, a short description, and a compelling, specific reason why they would be a good customer for SYNC TECH. Focus on their likely pain points. If contact information like a phone number, email, or website is not publicly available, you may leave it out.

Generate a list of up to 5 high-quality leads. Adhere strictly to the output schema.
`,
});

const findBusinessLeadsFlow = ai.defineFlow(
  {
    name: 'findBusinessLeadsFlow',
    inputSchema: FindBusinessLeadsInputSchema,
    outputSchema: FindBusinessLeadsOutputSchema,
  },
  async input => {
    const {output} = await findLeadsPrompt(input);
    return output!;
  }
);
