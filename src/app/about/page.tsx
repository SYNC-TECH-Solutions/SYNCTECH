
'use client';

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes SYNC TECH different from other tech companies?",
    answer: "We bridge the gap between high-end quality and affordability. Our clients get the premium, enterprise-level solutions they need without the enterprise-level price tag. We're lean, efficient, and obsessed with delivering maximum value."
  },
  {
    question: "How do you keep your prices so competitive?",
    answer: "Our business model is built on efficiency. We leverage modern, streamlined development processes, maintain low overheads, and focus on what truly matters: delivering exceptional results. This means you're paying for pure expertise, not agency fluff."
  },
  {
    question: "What does the typical project process look like?",
    answer: "Our process is transparent and collaborative. It starts with a deep-dive into your goals (Discovery), followed by a clear plan (Strategy), building your solution (Development), rigorous testing (QA), and a smooth launch (Deployment). We keep you informed every step of the way."
  },
  {
    question: "Can you work with businesses outside of Dublin?",
    answer: "Absolutely. While we are proudly based in Dublin, we serve clients across Ireland and internationally. Our digital-first approach ensures seamless collaboration regardless of your location."
  }
];

export default function AboutPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <section 
        id="about" 
        ref={ref}
        className={cn(
          "py-20 md:py-28 bg-background transition-opacity duration-1000 ease-in-out",
          inView ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="container">
          <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold">About SYNC TECH</h1>
              <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
                  Delivering Unmatched Quality and Value in Every Project.
              </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-last md:order-first">
              <Card className="overflow-hidden">
                  <Image
                      src="https://placehold.co/800x600.png"
                      alt="A stylized image representing technology and innovation in Dublin"
                      width={800}
                      height={600}
                      data-ai-hint="technology innovation"
                      className="w-full h-auto object-cover transition-transform hover:scale-105"
                  />
              </Card>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Welcome to SYNC TECH, a leading tech company in Dublin, Ireland, dedicated to providing top-tier solutions in Web Development, AI Automation, and Cybersecurity. Founded by Sheraz Hussain in May 2024, SYNC TECH was born from a passion for making cutting-edge technology both accessible and affordable. We are on a mission to empower businesses of all sizes by bridging the gap between complex innovation and real-world application, ensuring our clients don’t just keep up with the future—they lead it.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Our Mission</h3>
                    <p className="text-muted-foreground text-sm">To deliver bespoke, high-impact technology solutions that drive growth, efficiency, and competitive advantage for our partners, offering the best quality at the most competitive price.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Our Value</h3>
                    <p className="text-muted-foreground text-sm">We combine deep technical expertise with a collaborative, client-centric approach, turning ambitious ideas into robust, scalable realities without breaking the bank.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="faq" 
        ref={faqRef}
        className={cn(
          "py-20 md:py-28 bg-secondary transition-opacity duration-1000 ease-in-out",
          faqInView ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Have questions? We've got answers. Here are some of the most common things we get asked.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
