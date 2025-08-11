'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a blog post.
 *
 * The flow uses AI to create content for a blog post based on a topic and keywords.
 * - generateBlogPost - A function that handles the blog post generation process.
 * - GenerateBlogPostInput - The input type for the generateBlogPost function.
 * - GenerateBlogPostOutput - The return type for the generateBlogPost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogPostInputSchema = z.object({
  topic: z.string().describe('The main topic of the blog post.'),
  keywords: z.string().describe('A comma-separated list of keywords to include in the blog post.'),
});
export type GenerateBlogPostInput = z.infer<typeof GenerateBlogPostInputSchema>;

const GenerateBlogPostOutputSchema = z.object({
  title: z.string().describe('The generated title for the blog post.'),
  excerpt: z.string().describe('A short, engaging summary of the blog post.'),
  content: z.string().describe('The full content of the blog post, formatted as an HTML string. The HTML should be well-structured with headings (h3), paragraphs (p), and lists (ul, li) where appropriate.'),
});
export type GenerateBlogPostOutput = z.infer<typeof GenerateBlogPostOutputSchema>;

export async function generateBlogPost(input: GenerateBlogPostInput): Promise<GenerateBlogPostOutput> {
  return generateBlogPostFlow(input);
}

const generateBlogPostPrompt = ai.definePrompt({
  name: 'generateBlogPostPrompt',
  input: {schema: GenerateBlogPostInputSchema},
  output: {schema: GenerateBlogPostOutputSchema},
  prompt: `You are an expert content creator and SEO specialist for a tech company called SYNC TECH. Your task is to write a high-quality, engaging, and informative blog post.

The blog post should be about the following topic:
Topic: {{{topic}}}

It must incorporate the following keywords naturally throughout the text:
Keywords: {{{keywords}}}

The tone should be professional, knowledgeable, and helpful, aimed at business owners and potential clients.

Please generate the following:
1.  A compelling and SEO-friendly title.
2.  A concise and interesting excerpt (1-2 sentences).
3.  The full blog post content, formatted as a single HTML string. Use appropriate tags like <h3> for subheadings, <p> for paragraphs, and <ul>/<li> for lists if needed. The content should be well-structured and easy to read.

Adhere strictly to the output schema.
`,
});

const generateBlogPostFlow = ai.defineFlow(
  {
    name: 'generateBlogPostFlow',
    inputSchema: GenerateBlogPostInputSchema,
    outputSchema: GenerateBlogPostOutputSchema,
  },
  async input => {
    const {output} = await generateBlogPostPrompt(input);
    return output!;
  }
);
