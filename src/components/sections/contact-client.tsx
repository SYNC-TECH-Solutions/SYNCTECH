'use client';

import { useEffect, useRef, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { useFirestore, addDocumentNonBlocking } from '@/firebase';
import { collection } from 'firebase/firestore';
import { Loader2, Mail, MapPin, Phone } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Label } from '../ui/label';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export function ContactClient() {
  const initialState: ContactFormState = { message: '', success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const firestore = useFirestore();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

   useEffect(() => {
    if (state.success && state.fields) {
      const { name, email, message } = state.fields;
      const submissionsRef = collection(firestore, "contactFormSubmissions");
      
      const data = { name, email, message, submittedAt: new Date() };
      
      // Use non-blocking write which handles permission errors automatically
      addDocumentNonBlocking(submissionsRef, data);
      
      // Assume success on the UI and let the error boundary catch any issues
      toast({
        title: 'Message Sent!',
        description: "Thank you for your message! We'll get back to you shortly.",
      });
      formRef.current?.reset();

    } else if (state.message && !state.success && state.issues) {
      toast({
        title: 'Submission Failed',
        description: state.issues.join(', ') || 'Please check your input.',
        variant: 'destructive',
      });
    }
  }, [state, toast, firestore]);

  return (
    <section 
      id="contact" 
      ref={ref}
      className={cn(
        "py-20 md:py-28 bg-secondary transition-opacity duration-1000 ease-in-out",
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Have a project in mind or just want to discuss possibilities? We'd love to hear from you. Let's build something great together.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="font-semibold">Global Headquarters</p>
                            <p className="text-muted-foreground">Serving clients worldwide</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                         <div className="bg-primary/10 p-3 rounded-full">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="font-semibold">Email Us</p>
                            <a href="mailto:synctechire@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">synctechire@gmail.com</a>
                        </div>
                    </div>
                     <div className="flex items-center gap-4">
                         <div className="bg-primary/10 p-3 rounded-full">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="font-semibold">Call Us</p>
                            <p className="text-muted-foreground">+353 83 068 2026</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form ref={formRef} action={formAction} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your Name" required />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea id="message" name="message" placeholder="Tell us about your project, goals, and budget..." className="min-h-[150px]" required />
                  </div>
                  <SubmitButton />
                </form>
            </div>
        </div>
      </div>
    </section>
  );
}
