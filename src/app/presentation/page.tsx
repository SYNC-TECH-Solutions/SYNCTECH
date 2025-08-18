
'use client';

import { ArrowRight, CheckCircle, BrainCircuit, CloudCog, AppWindow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4">
                Accelerate Your Business with
                <span className="block text-primary">Transformative Technology Solutions</span>
            </h1>
          <p className="mt-4 text-xl text-muted-foreground">From intelligent automation to secure cloud infrastructure, we are your strategic partner for innovation and growth.</p>
           <div className="mt-8">
                <Button asChild size="lg">
                    <Link href="/contact">
                        Start Your Digital Transformation <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </div>
      </Slide>

      {/* Slide 2: The Mission */}
      <Slide>
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold">Building the Future of Business, Today.</h2>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed">
             At SYNC TECH, we don't just provide technology; we architect solutions that drive real-world business outcomes. With a deep focus on AI, cloud, and managed services, our expert team partners with you to streamline operations, enhance security, and unlock new opportunities for growth.
          </p>
        </div>
      </Slide>

      {/* Slide 3: Our Services */}
      <Slide className="bg-secondary">
        <div className="max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold">Our Core Technology Services</h2>
            <p className="mt-4 text-xl text-muted-foreground">We specialize in a focused suite of services designed to help you navigate the complexities of digital transformation.</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center gap-2 p-4">
                    <BrainCircuit className="w-12 h-12 text-primary" />
                    <h3 className="font-bold mt-2">Digital Transformation & AI</h3>
                    <p className="text-muted-foreground text-sm">Modernize your operations with AI-powered solutions, business process automation, and robust data analytics to stay competitive.</p>
                </div>
                <div className="flex flex-col items-center gap-2 p-4">
                    <CloudCog className="w-12 h-12 text-primary" />
                    <h3 className="font-bold mt-2">Managed IT & Cloud Solutions</h3>
                     <p className="text-muted-foreground text-sm">From infrastructure management to cloud migration and cybersecurity, we ensure your IT environment is secure, scalable, and reliable 24/7.</p>
                </div>
                 <div className="flex flex-col items-center gap-2 p-4">
                    <AppWindow className="w-12 h-12 text-primary" />
                    <h3 className="font-bold mt-2">Custom Software & Apps</h3>
                     <p className="text-muted-foreground text-sm">We design and develop bespoke web and mobile applications that are intuitive, robust, and perfectly aligned with your business objectives.</p>
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
                        <Image src="/project/SMA.png" width={600} height={300} alt="Stylish Marble Art" className="rounded-lg" data-ai-hint="ecommerce website" />
                    </CardHeader>
                    <CardContent>
                        <h3 className="font-bold">Stylish Marble Art</h3>
                        <p className="text-sm text-muted-foreground">Bespoke e-commerce platform that led to a 40% increase in customer inquiries.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                         <Image src="/project/atlantichotel.png" width={600} height={300} alt="Atlantic Hotel" className="rounded-lg" data-ai-hint="hotel booking system" />
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
      <Slide className="bg-blue-800 text-white">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Innovate?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Partner with us to transform your vision into a reality and stay ahead in a rapidly evolving market.
          </p>
           <div className="mt-8">
                <Button asChild size="lg" variant="secondary">
                    <Link href="/contact">
                        Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </div>
      </Slide>
      
    </div>
  );
}
