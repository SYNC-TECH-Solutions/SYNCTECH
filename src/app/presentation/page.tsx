
'use client';

import { ArrowRight, CheckCircle, Code, Bot, Shield, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Logo } from "@/components/logo";
import Image from "next/image";

const Slide = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`w-full h-[calc(100vh-4rem)] flex flex-col justify-center items-center p-8 text-center border-b ${className}`}>
    {children}
  </div>
);

export default function PresentationPage() {
  return (
    <div className="bg-background text-foreground">
      
      {/* Slide 1: Title */}
      <Slide className="bg-secondary">
        <div className="max-w-4xl">
          <Logo className="text-6xl justify-center" />
          <h2 className="mt-4 text-4xl font-bold tracking-tight">Official Business Launch</h2>
          <p className="mt-4 text-xl text-muted-foreground">Premium Tech Solutions at Competitive Prices.</p>
        </div>
      </Slide>

      {/* Slide 2: The Mission */}
      <Slide>
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold">Our Mission</h2>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed">
            To bridge the gap between elite, high-end technology and affordability. We empower businesses by delivering superior quality, innovative strategies, and robust solutions without the premium price tag.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg">Unmatched Quality</h3>
                <p className="text-muted-foreground">Enterprise-level results for every project.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg">Unbeatable Value</h3>
                <p className="text-muted-foreground">Maximizing your ROI is our core metric for success.</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 3: Our Services */}
      <Slide className="bg-secondary">
        <div className="max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold">What We Do</h2>
            <p className="mt-4 text-xl text-muted-foreground">A complete suite of services to build and protect your digital presence.</p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center gap-2">
                    <Code className="w-12 h-12 text-primary" />
                    <h3 className="font-bold">Web Development</h3>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Bot className="w-12 h-12 text-primary" />
                    <h3 className="font-bold">AI Automation</h3>
                </div>
                 <div className="flex flex-col items-center gap-2">
                    <Shield className="w-12 h-12 text-primary" />
                    <h3 className="font-bold">Cybersecurity</h3>
                </div>
                 <div className="flex flex-col items-center gap-2">
                    <Eye className="w-12 h-12 text-primary" />
                    <h3 className="font-bold">SEO</h3>
                </div>
            </div>
        </div>
      </Slide>

       {/* Slide 4: Our Work */}
      <Slide>
        <div className="max-w-5xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold">Proof of Quality</h2>
            <p className="mt-4 text-xl text-muted-foreground">Our work speaks for itself. Here are some of our successful client projects.</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <Image src="/project/SMA.png" width={600} height={300} alt="Stylish Marble Art" className="rounded-lg" />
                    </CardHeader>
                    <CardContent>
                        <h3 className="font-bold">Stylish Marble Art</h3>
                        <p className="text-sm text-muted-foreground">Bespoke e-commerce platform that led to a 40% increase in customer inquiries.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                         <Image src="/project/atlantichotel.png" width={600} height={300} alt="Atlantic Hotel" className="rounded-lg" />
                    </CardHeader>
                    <CardContent>
                        <h3 className="font-bold">Atlantic Hotel</h3>
                        <p className="text-sm text-muted-foreground">Custom booking system that boosted direct revenue by 67%.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </Slide>

       {/* Slide 5: Call to Action */}
      <Slide>
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold">Let's Build the Future. Together.</h2>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed">
            We're officially open for business and ready to bring your vision to life.
          </p>
           <div className="mt-8">
                <Button asChild size="lg">
                    <Link href="/contact">
                        Start Your Project Today <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </div>
      </Slide>
      
    </div>
  );
}
