
'use client';

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Route, ShieldCheck, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "../ui/button";

const faqs = [
  {
    question: "What specific services do you offer?",
    answer: "We offer a comprehensive suite of IT solutions including Application Modernization, Managed Cloud & Optimization, FinOps & Cost Management, AI & Machine Learning, Cybersecurity, and Digital Growth & SEO. You can explore each of these in detail on our <a href='/services' class='text-primary hover:underline'>services page</a>."
  },
  {
    question: "Can I see examples of your previous work?",
    answer: "Absolutely. We pride ourselves on the quality and impact of our work. You can view detailed case studies of our projects, from AI-driven analytics platforms to custom e-commerce stores, in our <a href='/portfolio' class='text-primary hover:underline'>portfolio section</a>."
  },
  {
    question: "Do you offer partnership opportunities for other businesses?",
    answer: "Yes, we do. We offer a robust Technology Partnership program designed to help other businesses expand their service offerings and unlock new revenue streams. You can learn more about the benefits and our engagement model on our <a href='/become-a-partner' class='text-primary hover:underline'>Become a Partner page</a>."
  },
  {
    question: "What is your process for starting a new project?",
    answer: "Our process begins with a complimentary consultation to understand your goals. From there, we move to a discovery and audit phase, followed by strategy, implementation, and optimization. The best way to start is to <a href='/contact' class='text-primary hover:underline'>get in touch with us</a> to discuss your project."
  }
];

export function AboutClient() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: roadmapRef, inView: roadmapInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: faqRef, inView: faqInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <section 
        id="about-hero" 
        ref={ref}
        className={cn(
          "py-20 md:py-28 bg-background transition-opacity duration-1000 ease-in-out",
          inView ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="container">
          <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Mission: Your Scalable Growth</h1>
              <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
                  We don't just build software. We architect the systems, strategies, and AI-powered solutions that turn fragmented processes into predictable, high-performance growth engines.
              </p>
          </div>
          <Card className="overflow-hidden">
             <Image
                src="/project/giants.png"
                alt="A strategic illustration of technology growth and planning"
                width={1200}
                height={600}
                data-ai-hint="strategy planning"
                className="w-full h-auto object-cover"
                priority
              />
          </Card>
        </div>
      </section>

      <section 
        id="vision" 
        ref={visionRef}
        className={cn(
          "py-20 md:py-28 bg-secondary transition-opacity duration-1000 ease-in-out",
          visionInView ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="container">
           <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-last">
              <Card className="overflow-hidden">
                  <Image
                      src="/dublinsync.png"
                      alt="A stylized image representing technology and innovation in Dublin"
                      width={800}
                      height={600}
                      data-ai-hint="technology innovation dublin"
                      className="w-full h-auto object-cover transition-transform hover:scale-105"
                  />
              </Card>
            </div>
            <div className="text-center md:text-left order-first">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The SYNC TECH Vision</h2>
               <p className="text-muted-foreground mb-6">
                Founded by <Link href="https://sherazhussain.synctech.ie" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Sheraz Hussain</Link>, SYNC TECH was born from a singular vision: to dismantle the barrier between elite, enterprise-grade technology and the businesses that need it most. We believe the power of <Link href="https://www.google.com/search?q=AI+Automation" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AI</Link>, <Link href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cloud infrastructure</Link>, and <Link href="https://www.google.com/search?q=Cybersecurity" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cybersecurity</Link> should be a universal catalyst for growth, not a luxury. Based in <Link href="https://www.google.com/search?q=Dublin+business+environment" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Dublin, Ireland</Link>, we combine local expertise with a global mindset to make powerful technology accessible, affordable, and transformative for every business, everywhere.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Our Mission</h3>
                    <p className="text-muted-foreground text-sm">To design and deploy the world's most advanced technology solutions, driving growth, efficiency, and a competitive edge for our partners at a globally competitive price.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Our Value Proposition</h3>
                    <p className="text-muted-foreground text-sm">We translate complex technological power into tangible, real-world success. Our value lies in delivering measurable ROI, whether through revenue growth, cost reduction, or market penetration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="roadmap"
        ref={roadmapRef}
        className={cn(
          "py-20 md:py-28 bg-background transition-opacity duration-1000 ease-in-out",
          roadmapInView ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="container max-w-4xl">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Commitment to Excellence: The SYNC TECH Roadmap</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Ambition requires a plan. We are committed to continuous improvement to better serve our clients and tackle enterprise-level challenges. Here’s a look at our path forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="p-6">
                <CardHeader className="items-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-4">
                        <Target className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Formalizing Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-sm">Our next horizon is achieving formal partner status with cloud giants like <Link href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AWS</Link>, <Link href="https://cloud.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google</Link>, and <Link href="https://azure.microsoft.com/en-us/get-started/azure-portal/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft</Link>. This commitment ensures we can support clients at the highest enterprise levels and pass on the benefits of these strategic alliances.</p>
                </CardContent>
            </Card>
             <Card className="p-6">
                <CardHeader className="items-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-4">
                        <Route className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Building Our Irish Roots</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-sm">As we grow, our plan includes establishing a physical headquarters here in <Link href="https://www.google.com/search?q=local+outreach+marketing+Dublin+Ireland" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Dublin</Link>. This step will solidify our presence, foster local talent, and create a hub for innovation and client collaboration right in the heart of Ireland's tech scene.</p>
                </CardContent>
            </Card>
             <Card className="p-6">
                <CardHeader className="items-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-4">
                        <ShieldCheck className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Managing Your Risk</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-sm">We take our responsibility as your technology partner seriously. We are actively securing comprehensive <Link href="https://www.google.com/search?q=business+insurance" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">business insurance</Link>, including Professional Indemnity and <Link href="https://www.google.com/search?q=Cyber+Liability+insurance" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cyber Liability</Link>, to ensure our high-risk services are backed by robust financial protection.</p>
                </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button asChild>
                <Link href="/presentation">View Our Partnership Proposal</Link>
            </Button>
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
                  <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

    