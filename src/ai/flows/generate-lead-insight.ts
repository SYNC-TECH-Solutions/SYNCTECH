'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate lead insights from a company website.
 *
 * - generateLeadInsight - A function that analyzes a company website to generate insights.
 * - LeadInsightInput - The input type for the function.
 * - LeadInsightOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LeadInsightInputSchema = z.object({
  industry: z.string().describe('The industry to search for leads in (e.g., "restaurants", "law firms").'),
  location: z.string().describe('The location to search for leads in (e.g., "Dublin, Ireland", "New York, USA").'),
});
export type LeadInsightInput = z.infer<typeof LeadInsightInputSchema>;

const LeadSchema = z.object({
    companyName: z.string().describe("The name of the company."),
    website: z.string().url().describe("The company's website URL."),
    summary: z.string().describe("A brief summary of what the company does."),
    potentialNeeds: z.array(z.string()).describe("A list of potential business or technology needs the company may have."),
    suggestedServices: z.array(z.string()).describe("A list of specific SYNC TECH services that could address the company's potential needs."),
});

const LeadInsightOutputSchema = z.object({
  leads: z.array(LeadSchema).describe("A list of potential leads found."),
  disclaimer: z.string().describe("A disclaimer that the generated data is for informational purposes and should be verified.")
});
export type LeadInsightOutput = z.infer<typeof LeadInsightOutputSchema>;

export async function generateLeadInsight(input: LeadInsightInput): Promise<LeadInsightOutput> {
  return generateLeadInsightFlow(input);
}

const generateLeadInsightPrompt = ai.definePrompt({
  name: 'generateLeadInsightPrompt',
  input: {schema: LeadInsightInputSchema},
  output: {schema: LeadInsightOutputSchema},
  prompt: `You are an expert Business Development Representative at SYNC TECH, a top-tier IT services company.
  Your task is to identify and qualify potential leads based on an industry and location.

  Find 3-5 promising leads in the following industry and location:
  - Industry: {{{industry}}}
  - Location: {{{location}}}

  For each lead, you must provide:
  1. The company's name.
  2. The company's website URL.
  3. A brief summary of what they do.
  4. An analysis of their potential needs, based on their industry and likely challenges.
  5. A list of specific, relevant services from SYNC TECH's portfolio that would be a good fit.

  SYNC TECH Services Portfolio:
  - Application Modernization
  - Managed Cloud & Optimization
  - FinOps & Cost Management
  - AI & Machine Learning
  - Cybersecurity
  - Digital Growth & SEO
  - Custom Web & Mobile App Development

  IMPORTANT: Conclude with a disclaimer stating that "The information provided is AI-generated for informational purposes and should be independently verified."

  Please provide a detailed report following the specified output schema. Be specific and justify your suggestions.
  `,
});

const generateLeadInsightFlow = ai.defineFlow(
  {
    name: 'generateLeadInsightFlow',
    inputSchema: LeadInsightInputSchema,
    outputSchema: LeadInsightOutputSchema,
  },
  async input => {
    const {output} = await generateLeadInsightPrompt(input);
    return output!;
  }
);
