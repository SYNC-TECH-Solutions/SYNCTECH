
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
  companyWebsite: z.string().url().describe('The URL of the company\'s website.'),
});
export type LeadInsightInput = z.infer<typeof LeadInsightInputSchema>;

const LeadInsightOutputSchema = z.object({
  companyName: z.string().describe("The name of the company."),
  companySummary: z.string().describe("A brief summary of what the company does, its industry, and its target audience."),
  potentialNeeds: z.array(z.string()).describe("A list of potential business or technology needs the company may have."),
  suggestedServices: z.array(z.string()).describe("A list of specific SYNC TECH services that could address the company's potential needs."),
});
export type LeadInsightOutput = z.infer<typeof LeadInsightOutputSchema>;

export async function generateLeadInsight(input: LeadInsightInput): Promise<LeadInsightOutput> {
  return generateLeadInsightFlow(input);
}

const generateLeadInsightPrompt = ai.definePrompt({
  name: 'generateLeadInsightPrompt',
  input: {schema: LeadInsightInputSchema},
  output: {schema: LeadInsightOutputSchema},
  prompt: `You are a business development expert at SYNC TECH, a top-tier IT services company.
  Your task is to analyze the following company website and generate a lead insight report.

  Website to analyze: {{{companyWebsite}}}

  From the website's content, determine the company's name, what it does, its industry, and who its customers are.
  Based on this analysis, identify potential challenges or opportunities where SYNC TECH's services could provide significant value.
  Finally, suggest specific services from SYNC TECH's offerings that are a perfect fit for this lead.

  SYNC TECH Services Portfolio:
  - Application Modernization
  - Managed Cloud & Optimization
  - FinOps & Cost Management
  - AI & Machine Learning
  - Cybersecurity
  - Digital Growth & SEO
  - Custom Web & Mobile App Development

  Please provide a detailed report following the specified output schema. Be specific and justify your suggestions based on the website's content.
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
