
'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a professional invoice.
 *
 * - generateInvoice - A function that takes invoice details and generates a structured invoice.
 * - GenerateInvoiceInput - The input type for the function.
 * - GenerateInvoiceOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LineItemSchema = z.object({
  description: z.string().describe('Description of the service or product.'),
  quantity: z.number().positive().describe('Quantity of the item.'),
  unitPrice: z.number().nonnegative().describe('Price per unit of the item.'),
});

const GenerateInvoiceInputSchema = z.object({
  invoiceNumber: z.string().describe('The unique invoice number.'),
  issueDate: z.string().describe('The date the invoice is issued (e.g., YYYY-MM-DD).'),
  dueDate: z.string().describe('The date the invoice is due (e.g., YYYY-MM-DD).'),
  clientName: z.string().describe("The client's full name or company name."),
  clientAddress: z.string().describe("The client's billing address."),
  ourName: z.string().describe('Your name or your company name.'),
  ourAddress: z.string().describe('Your billing address.'),
  lineItems: z.array(LineItemSchema).describe('A list of all items to be included in the invoice.'),
  taxRate: z.number().nonnegative().optional().describe('The tax rate to apply to the subtotal (e.g., 23 for 23%).'),
  notes: z.string().optional().describe('Any additional notes or payment instructions.'),
});
export type GenerateInvoiceInput = z.infer<typeof GenerateInvoiceInputSchema>;

const GeneratedLineItemSchema = z.object({
    description: z.string(),
    quantity: z.number(),
    unitPrice: z.number(),
    total: z.number().describe('The total for this line item (quantity * unitPrice).'),
});

const GenerateInvoiceOutputSchema = z.object({
    subtotal: z.number().describe('The sum of all line item totals before tax.'),
    taxAmount: z.number().describe('The calculated tax amount.'),
    total: z.number().describe('The final total amount due (subtotal + tax).'),
    items: z.array(GeneratedLineItemSchema).describe('The list of line items with calculated totals.'),
});
export type GenerateInvoiceOutput = z.infer<typeof GenerateInvoiceOutputSchema>;


export async function generateInvoice(input: GenerateInvoiceInput): Promise<GenerateInvoiceOutput> {
  return generateInvoiceFlow(input);
}

const generateInvoicePrompt = ai.definePrompt({
  name: 'generateInvoicePrompt',
  input: {schema: GenerateInvoiceInputSchema},
  output: {schema: GenerateInvoiceOutputSchema},
  prompt: `You are an expert accounting assistant. Your task is to process the following details and generate a structured invoice JSON object.

  Invoice Details:
  - From: {{{ourName}}}
  - To: {{{clientName}}}
  - Invoice Number: {{{invoiceNumber}}}
  - Issue Date: {{{issueDate}}}
  - Due Date: {{{dueDate}}}

  Line Items:
  {{#each lineItems}}
  - Description: {{{this.description}}}, Quantity: {{{this.quantity}}}, Unit Price: {{{this.unitPrice}}}
  {{/each}}

  - Tax Rate: {{#if taxRate}}{{{taxRate}}}%{{else}}0%{{/if}}

  Instructions:
  1.  For each line item, calculate the total price by multiplying its quantity by its unit price.
  2.  Calculate the subtotal by summing the total prices of all line items.
  3.  Calculate the tax amount by applying the provided tax rate to the subtotal. If no tax rate is provided, the tax amount is 0.
  4.  Calculate the final total by adding the tax amount to the subtotal.
  5.  Return a JSON object that includes the calculated subtotal, tax amount, final total, and a list of the processed line items with their individual totals.

  Adhere strictly to the output schema.
  `,
});

const generateInvoiceFlow = ai.defineFlow(
  {
    name: 'generateInvoiceFlow',
    inputSchema: GenerateInvoiceInputSchema,
    outputSchema: GenerateInvoiceOutputSchema,
  },
  async input => {
    const {output} = await generateInvoicePrompt(input);
    return output!;
  }
);
