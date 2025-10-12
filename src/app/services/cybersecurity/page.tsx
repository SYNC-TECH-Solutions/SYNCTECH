
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ShieldCheck, Search, HardDrive, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Expert Cybersecurity Services in Dublin, Ireland | Sync Tech",
  description: "Sync Tech offers comprehensive cybersecurity services in Dublin, including managed security (MSSP), penetration testing, and GDPR compliance. Protect your Irish business with our expert cyber defense strategy.",
  keywords: ["Cybersecurity services Dublin", "Managed Security Services Ireland", "Penetration testing Dublin", "GDPR compliance Ireland", "Cyber risk management", "IT security services", "Security partner Dublin", "Cybersecurity for Irish SMEs"],
};

const coreServices = [
    {
        icon: <Shield className="h-8 w-8 text-primary" />,
        title: "Managed Detection & Response (MDR)",
        description: "Benefit from 24/7 security monitoring from our Security Operations Center (SOC) to proactively hunt for threats and neutralize them before they impact your business."
    },
    {
        icon: <HardDrive className="h-8 w-8 text-primary" />,
        title: "Endpoint, Network & Cloud Security",
        description: "We deploy and manage robust Endpoint Detection and Response (EDR), firewall management, and cloud security services for complete infrastructure protection."
    },
    {
        icon: <Search className="h-8 w-8 text-primary" />,
        title: "Vulnerability Management & Pen Testing",
        description: "Our ethical hacking services include regular vulnerability assessments and penetration testing to identify and remediate weaknesses in your security posture."
    },
    {
        icon: <CheckCircle className="h-8 w-8 text-primary" />,
        title: "Compliance & Governance (GRC)",
        description: "Navigate complex regulations with our expert compliance consulting, covering everything from GDPR compliance to ISO 27001 certification and data privacy."
    }
];

export default function CybersecurityPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary text-center">
        <div className="container">
          <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Cybersecurity Services in Ireland</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Partner with Sync Tech, your trusted Dublin-based security provider, for comprehensive cyber defense, from 24/7 monitoring and managed security (MSSP) to proactive threat intelligence.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Get a Free Security Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Security Matters Section */}
      <section className="py-20 md:py-28">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl md:text-4xl font-bold">Your Proactive Cyber Defense Strategy Starts Here</h2>
                  <p className="mt-4 text-muted-foreground text-lg">In today's digital-first world, cyber risk management is not an IT issue; it's a core business function. For Irish SMEs and enterprises alike, a security breach can mean reputational damage, financial loss, and regulatory fines. Sync Tech provides proactive, enterprise-grade cybersecurity services that are both affordable and effective.</p>
                  <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">Managed Security Services (MSSP)</h3>
                              <p className="text-muted-foreground">We act as your dedicated Security Operations Center (SOC), providing 24/7 security monitoring and incident response services to protect your digital assets around the clock.</p>
                          </div>
                      </li>
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">Zero Trust Implementation</h3>
                              <p className="text-muted-foreground">We help you move beyond traditional perimeter security with a modern Zero Trust architecture, ensuring every access request is verified, regardless of its origin.</p>
                          </div>
                      </li>
                  </ul>
              </div>
              <div className="relative">
                  <Image 
                    src="/cyber.png" 
                    alt="Cybersecurity shield protecting digital assets"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                    data-ai-hint="cybersecurity protection"
                />
              </div>
          </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Comprehensive Security Solutions</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We offer a full suite of IT security services designed to protect your business at every level, from foundational security architecture design to advanced threat hunting.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service) => (
              <Card key={service.title} className="text-center p-6 bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col items-center">
                  {service.icon}
                  <CardTitle className="mt-4 text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* Audits and Testing Section */}
      <section className="py-20 md:py-28">
        <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="relative order-last md:order-first">
                    <Card>
                        <CardHeader>
                            <CardTitle>Security Audits & Penetration Testing</CardTitle>
                            <CardDescription>Identify weaknesses before attackers do.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span>Web Application & API Penetration Testing</span></li>
                                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span>Internal & External Network Vulnerability Scanning</span></li>
                                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span>Phishing Simulations & Social Engineering Tests</span></li>
                                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span>Security Posture Assessments and Audits</span></li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold">Uncover Your Security Gaps</h2>
                    <p className="mt-4 text-muted-foreground">Don't wait for a breach to find your weak points. Our ethical hacking and security audit services provide a clear, actionable roadmap to strengthen your defenses. As a local Dublin cybersecurity firm, we understand the specific threats facing Irish businesses and tailor our assessments accordingly.</p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 text-center bg-primary text-primary-foreground">
          <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Secure Your Business?</h2>
              <p className="mt-4 max-w-2xl mx-auto opacity-90">
                  Partner with Sync Tech, a trusted Irish security consulting firm, to build a resilient and proactive cyber defense. Contact us today for a free, confidential security assessment.
              </p>
              <div className="mt-8">
                  <Button asChild size="lg" variant="secondary">
                      <Link href="/contact">
                          Request Your Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}
