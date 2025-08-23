
'use client';

import { useState, useTransition } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { generateInvoice, GenerateInvoiceOutput } from '@/ai/flows/generate-invoice';
import { Loader2, PlusCircle, Trash2, Copy } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const lineItemSchema = z.object({
  description: z.string().min(1, 'Description is required.'),
  quantity: z.coerce.number().positive('Must be > 0.'),
  unitPrice: z.coerce.number().nonnegative('Must be >= 0.'),
});

const formSchema = z.object({
  invoiceNumber: z.string().min(1, 'Invoice number is required.'),
  issueDate: z.string().min(1, 'Issue date is required.'),
  dueDate: z.string().min(1, 'Due date is required.'),
  clientName: z.string().min(1, "Client's name is required."),
  clientAddress: z.string().min(1, "Client's address is required."),
  ourName: z.string().min(1, 'Your name is required.'),
  ourAddress: z.string().min(1, 'Your address is required.'),
  lineItems: z.array(lineItemSchema).min(1, 'At least one line item is required.'),
  taxRate: z.coerce.number().nonnegative('Must be >= 0.').optional(),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;
type FullInvoiceData = FormValues & GenerateInvoiceOutput;

export default function InvoiceGeneratorPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [generatedInvoice, setGeneratedInvoice] = useState<FullInvoiceData | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      invoiceNumber: `INV-${new Date().getFullYear()}-001`,
      issueDate: new Date().toISOString().split('T')[0],
      dueDate: new Date(new Date().setDate(new Date().getDate() + 30)).toISOString().split('T')[0],
      clientName: '',
      clientAddress: '',
      ourName: 'SYNC TECH',
      ourAddress: 'Dublin, Ireland',
      lineItems: [{ description: '', quantity: 1, unitPrice: 0 }],
      taxRate: 23,
      notes: 'Thank you for your business.',
    },
  });
  
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'lineItems',
  });

  function onSubmit(values: FormValues) {
    setGeneratedInvoice(null);
    startTransition(async () => {
      try {
        const result = await generateInvoice(values);
        setGeneratedInvoice({ ...values, ...result });
        toast({
          title: 'Invoice Generated!',
          description: 'Your invoice has been calculated and is ready for review.',
        });
      } catch (error) {
        console.error('Error generating invoice:', error);
        toast({
          title: 'Generation Failed',
          description: 'An unexpected error occurred. Please try again.',
          variant: 'destructive',
        });
      }
    });
  }
  
  const copyInvoice = () => {
    if (!generatedInvoice) return;
    const invoiceText = `
INVOICE

From:
${generatedInvoice.ourName}
${generatedInvoice.ourAddress}

To:
${generatedInvoice.clientName}
${generatedInvoice.clientAddress}

Invoice Number: ${generatedInvoice.invoiceNumber}
Issue Date: ${generatedInvoice.issueDate}
Due Date: ${generatedInvoice.dueDate}

---
Items:
${generatedInvoice.items.map(item => 
  `- ${item.description} (Qty: ${item.quantity}, Unit Price: €${item.unitPrice.toFixed(2)}, Total: €${item.total.toFixed(2)})`
).join('\n')}

---
Subtotal: €${generatedInvoice.subtotal.toFixed(2)}
Tax (${generatedInvoice.taxRate || 0}%): €${generatedInvoice.taxAmount.toFixed(2)}
Total: €${generatedInvoice.total.toFixed(2)}

Notes:
${generatedInvoice.notes || ''}
    `;
    navigator.clipboard.writeText(invoiceText.trim());
    toast({ title: 'Invoice Copied!', description: 'The invoice details have been copied to your clipboard.' });
  }

  return (
    <div className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>AI Invoice Generator</CardTitle>
              <CardDescription>
                Fill in the details below and let the AI calculate the totals for you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Parties */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="ourName" render={({ field }) => ( <FormItem><FormLabel>Your Name/Company</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="ourAddress" render={({ field }) => ( <FormItem><FormLabel>Your Address</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="clientName" render={({ field }) => ( <FormItem><FormLabel>Client's Name/Company</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="clientAddress" render={({ field }) => ( <FormItem><FormLabel>Client's Address</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem> )} />
                  </div>
                  <Separator />
                  {/* Dates & Number */}
                   <div className="grid md:grid-cols-3 gap-4">
                     <FormField control={form.control} name="invoiceNumber" render={({ field }) => ( <FormItem><FormLabel>Invoice Number</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem> )} />
                     <FormField control={form.control} name="issueDate" type="date" render={({ field }) => ( <FormItem><FormLabel>Issue Date</FormLabel><FormControl><Input type="date" {...field} /></FormControl><FormMessage /></FormItem> )} />
                     <FormField control={form.control} name="dueDate" type="date" render={({ field }) => ( <FormItem><FormLabel>Due Date</FormLabel><FormControl><Input type="date" {...field} /></FormControl><FormMessage /></FormItem> )} />
                   </div>
                  <Separator />
                  {/* Line Items */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Line Items</h3>
                    <div className="space-y-4">
                      {fields.map((field, index) => (
                        <div key={field.id} className="grid grid-cols-[1fr_auto_auto_auto] gap-2 items-start">
                          <FormField control={form.control} name={`lineItems.${index}.description`} render={({ field }) => ( <FormItem className="w-full"><FormLabel className="sr-only">Description</FormLabel><FormControl><Input placeholder="Service or product description" {...field} /></FormControl><FormMessage /></FormItem> )} />
                          <FormField control={form.control} name={`lineItems.${index}.quantity`} render={({ field }) => ( <FormItem><FormLabel className="sr-only">Quantity</FormLabel><FormControl><Input type="number" placeholder="Qty" className="w-20" {...field} /></FormControl><FormMessage /></FormItem> )} />
                          <FormField control={form.control} name={`lineItems.${index}.unitPrice`} render={({ field }) => ( <FormItem><FormLabel className="sr-only">Unit Price</FormLabel><FormControl><Input type="number" placeholder="Price" className="w-24" {...field} /></FormControl><FormMessage /></FormItem> )} />
                          <Button type="button" variant="outline" size="icon" onClick={() => remove(index)}><Trash2 className="h-4 w-4" /></Button>
                        </div>
                      ))}
                    </div>
                    <Button type="button" variant="outline" size="sm" onClick={() => append({ description: '', quantity: 1, unitPrice: 0 })} className="mt-4">
                      <PlusCircle className="mr-2 h-4 w-4" /> Add Item
                    </Button>
                  </div>
                   <Separator />
                   {/* Tax and Notes */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="taxRate" render={({ field }) => ( <FormItem><FormLabel>Tax Rate (%)</FormLabel><FormControl><Input type="number" placeholder="e.g., 23" {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="notes" render={({ field }) => ( <FormItem><FormLabel>Notes</FormLabel><FormControl><Textarea placeholder="Payment instructions, terms, etc." {...field} /></FormControl><FormMessage /></FormItem> )} />
                  </div>

                  <Button type="submit" disabled={isPending} className="w-full">
                    {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Generate Invoice
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            {isPending && (
                <Card>
                    <CardContent className="p-12 text-center">
                        <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary mb-4" />
                        <p className="text-muted-foreground">Generating your invoice...</p>
                    </CardContent>
                </Card>
            )}
            {generatedInvoice && (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Invoice #{generatedInvoice.invoiceNumber}</CardTitle>
                      <CardDescription>Issued: {generatedInvoice.issueDate} &bull; Due: {generatedInvoice.dueDate}</CardDescription>
                    </div>
                    <Button variant="outline" onClick={copyInvoice}>
                      <Copy className="mr-2 h-4 w-4" /> Copy
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-1">
                          <h4 className="font-semibold">From:</h4>
                          <p className="text-muted-foreground whitespace-pre-wrap">{generatedInvoice.ourName}\n{generatedInvoice.ourAddress}</p>
                        </div>
                         <div className="space-y-1">
                          <h4 className="font-semibold">To:</h4>
                          <p className="text-muted-foreground whitespace-pre-wrap">{generatedInvoice.clientName}\n{generatedInvoice.clientAddress}</p>
                        </div>
                      </div>
                      <Separator />
                      {/* Items Table */}
                      <div className="space-y-2">
                        <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 font-semibold text-sm px-2">
                          <span>Description</span>
                          <span className="text-right">Qty</span>
                          <span className="text-right">Unit Price</span>
                          <span className="text-right">Total</span>
                        </div>
                         <Separator />
                        <div className="space-y-2">
                          {generatedInvoice.items.map((item, index) => (
                            <div key={index} className="grid grid-cols-[1fr_auto_auto_auto] gap-4 text-sm px-2 py-1 rounded-md hover:bg-secondary">
                              <span>{item.description}</span>
                              <span className="text-right">{item.quantity}</span>
                              <span className="text-right">€{item.unitPrice.toFixed(2)}</span>
                              <span className="text-right">€{item.total.toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                       <Separator />
                       {/* Totals */}
                       <div className="space-y-2 text-sm w-full ml-auto max-w-xs">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span>€{generatedInvoice.subtotal.toFixed(2)}</span>
                          </div>
                           <div className="flex justify-between">
                            <span className="text-muted-foreground">Tax ({generatedInvoice.taxRate || 0}%)</span>
                            <span>€{generatedInvoice.taxAmount.toFixed(2)}</span>
                          </div>
                           <div className="flex justify-between font-bold text-base">
                            <span>Total</span>
                            <span>€{generatedInvoice.total.toFixed(2)}</span>
                          </div>
                       </div>
                        <Separator />
                        {/* Notes */}
                        {generatedInvoice.notes && (
                            <div className="text-sm">
                                <h4 className="font-semibold mb-2">Notes:</h4>
                                <p className="text-muted-foreground whitespace-pre-wrap">{generatedInvoice.notes}</p>
                            </div>
                        )}
                    </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

