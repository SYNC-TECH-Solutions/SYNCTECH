
'use server';

/**
 * @fileOverview A chatbot AI agent for SYNC TECH.
 *
 * - chat - A function that handles the chatbot conversation.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).describe("The conversation history."),
  message: z.string().describe('The latest user message.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string().describe("The AI's response to the user."),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;


export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const chatFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const { history, message } = input;
    
    const systemPrompt = `You are a friendly and helpful AI assistant for SYNC TECH, a tech company in Dublin, Ireland. Your goal is to answer user questions, provide information about our services (Web Development, AI Automation, Cybersecurity, etc.), and encourage them to get in touch via the contact form.

Keep your responses concise, professional, and helpful.`;

    const llmResponse = await ai.generate({
      prompt: message,
      history: [
        { role: 'system', content: systemPrompt },
        ...history,
      ],
      model: 'googleai/gemini-2.0-flash',
    });

    const responseText = llmResponse.text();

    return { response: responseText };
  }
);
