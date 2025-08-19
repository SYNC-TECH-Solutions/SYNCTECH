
'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a cold email and proposal outline.
 *
 * - generateProposal - A function that takes lead insights and generates outreach materials.
 * - GenerateProposalInput - The input type for the function.
 * - GenerateProposalOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProposalInputSchema = z.object({
  companyName: z.string().describe("The name of the company."),
  companySummary: z.string().describe("A brief summary of what the company does."),
  potentialNeeds: z.array(z.string()).describe("A list of potential needs the company may have."),
  suggestedServices: z.array(z.string()).describe("A list of SYNC TECH services to propose."),
});
export type GenerateProposalInput = z.infer<typeof GenerateProposalInputSchema>;

const GenerateProposalOutputSchema = z.object({
  emailSubject: z.string().describe("A compelling subject line for a cold outreach email."),
  emailBody: z.string().describe("The full body of a personalized cold outreach email, written in a professional and engaging tone. It should be formatted as a plain string with line breaks."),
  proposalOutline: z.string().describe("A structured outline for a business proposal, formatted as a markdown string. It should include sections like 'Understanding Your Needs', 'Proposed Solutions', 'Project Phases', and 'Expected Outcomes'."),
});
export type GenerateProposalOutput = z.infer<typeof GenerateProposalOutputSchema>;

export async function generateProposal(input: GenerateProposalInput): Promise<GenerateProposalOutput> {
  return generateProposalFlow(input);
}

const generateProposalPrompt = ai.definePrompt({
  name: 'generateProposalPrompt',
  input: {schema: GenerateProposalInputSchema},
  output: {schema: GenerateProposalOutputSchema},
  prompt: `You are a world-class business proposal writer at SYNC TECH.
  Your task is to create a compelling cold email and a structured proposal outline based on the provided lead insight report.

  LEAD INSIGHT REPORT:
  - Company Name: {{{companyName}}}
  - Company Summary: {{{companySummary}}}
  - Potential Needs: {{#each potentialNeeds}}- {{{this}}}\n{{/each}}
  - Suggested SYNC TECH Services: {{#each suggestedServices}}- {{{this}}}\n{{/each}}

  INSTRUCTIONS:
  1.  **Cold Email:** Write a personalized, professional, and concise email to a key decision-maker at {{{companyName}}}.
      - Start by showing you've done your research (reference their business).
      - Briefly touch on one of their potential needs.
      - Introduce how SYNC TECH's suggested services can solve their problem.
      - End with a clear, low-friction call to action (e.g., "a brief 15-minute call").
      - Generate a compelling subject line.

  2.  **Proposal Outline:** Create a well-structured proposal outline in markdown format.
      - The outline should be a strong starting point for a full proposal.
      - It must be based on the suggested services and potential needs identified in the report.
      - Include sections for an introduction, an understanding of their challenges, your proposed solutions (linking them to the services), project phases, and expected business outcomes.

  Adhere strictly to the output schema.
  `,
});

const generateProposalFlow = ai.defineFlow(
  {
    name: 'generateProposalFlow',
    inputSchema: GenerateProposalInputSchema,
    outputSchema: GenerateProposalOutputSchema,
  },
  async input => {
    const {output} = await generateProposalPrompt(input);
    return output!;
  }
);
