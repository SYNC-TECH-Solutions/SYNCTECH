
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Server, Globe, Shield, Mail, Users, BarChart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/components/logo';

export const metadata: Metadata = {
  title: "Managed GoDaddy Pro Services | SYNC TECH",
  description: "SYNC TECH offers expert management of GoDaddy Pro services, including web hosting, domains, security, and professional email. Let us handle the infrastructure so you can focus on your business.",
  keywords: ["GoDaddy Pro", "managed web hosting", "domain management", "website security", "professional email", "SYNC TECH GoDaddy", "WordPress hosting Ireland"],
};

const godaddyServices = [
    {
        icon: <Server className="h-8 w-8 text-primary" />,
        title: "Managed Hosting",
        description: "We provide and manage high-performance hosting solutions, including Managed WordPress and VPS, ensuring your site is fast, reliable, and always online.",
        features: ["Managed WordPress", "Web Hosting Plus", "VPS Hosting", "Performance Optimization"]
    },
    {
        icon: <Globe className="h-8 w-8 text-primary" />,
        title: "Domain Management",
        description: "From securing the perfect domain name to managing DNS settings and renewals, we handle all aspects of your domain portfolio.",
        features: ["Domain Registration", "Bulk Domain Search", "DNS Management", "Domain Transfers"]
    },
    {
        icon: <Shield className="h-8 w-8 text-primary" />,
        title: "Website Security",
        description: "We protect your digital assets with a full suite of security products, including SSL certificates, daily malware scans, and a Web Application Firewall (WAF).",
        features: ["SSL Certificates", "Malware Scan & Removal", "WAF & DDoS Protection", "Website Backups"]
    },
    {
        icon: <Mail className="h-8 w-8 text-primary" />,
        title: "Professional Email",
        description: "Build credibility with professional email powered by Microsoft 365. We set up and manage your email accounts, ensuring reliable communication.",
        features: ["Microsoft 365 Email", "Custom Email Addresses", "Email Security", "Cloud Storage"]
    },
];

export default function GoDaddyPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary text-center">
        <div className="container">
            <div className="flex justify-center items-center gap-4 md:gap-6 mb-8">
                <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.godaddy.com%2Fresources%2Flatam%2Fwp-content%2Fuploads%2Fsites%2F4%2Flogo-godaddy-2023-e1698334197459.png%3Fsize%3D3840x0&f=1&nofb=1&ipt=fdcfea116ed683f4a2db30b244b13a67c1364904c8d4c972a9a7e372ca1d597d" alt="GoDaddy Pro Logo" width={100} height={60} className="object-contain" />
                <span className="text-4xl md:text-5xl font-bold text-muted-foreground">x</span>
                <Logo className="text-4xl md:text-5xl" />
            </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Managed GoDaddy Pro Services</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            We leverage the power of GoDaddy Pro to manage your entire web infrastructure—from domains and hosting to security and email—so you can focus on what you do best: running your business.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a href="mailto:synctechire@gmail.com?subject=GoDaddy%20Pro%20Service%20Inquiry">
                Get a Free Infrastructure Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What is GoDaddy Pro? Section */}
      <section className="py-20 md:py-28">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl md:text-4xl font-bold">What is <span className="text-primary">GoDaddy Pro</span>?</h2>
                  <p className="mt-4 text-muted-foreground text-lg">GoDaddy Pro is a centralized platform designed for web professionals to manage their clients' websites and products efficiently. It provides a suite of tools that allows us to oversee hosting, domains, security, and more from a single, unified dashboard.</p>
                  <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">Centralized & Efficient Management</h3>
                              <p className="text-muted-foreground">The platform enables us to deliver faster, more reliable support by consolidating all your web assets. This means quicker troubleshooting and more efficient maintenance for your sites.</p>
                          </div>
                      </li>
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">Access to Premium Tools & Support</h3>
                              <p className="text-muted-foreground">As GoDaddy Pro partners, we have access to advanced tools and priority support, ensuring that any issues are resolved promptly and your infrastructure is always optimized for performance.</p>
                          </div>
                      </li>
                  </ul>
              </div>
              <div className="relative flex justify-center items-center">
                  <Image 
                    src="https://images.ctfassets.net/23aumh6u8s0i/5ZpG3sR2a9x30sX3Sj3u9I/27c24f605a90d96d747d7c50a112f43c/godaddy-pro_logo"
                    alt="GoDaddy Pro Logo"
                    width={400}
                    height={200}
                    className="rounded-lg"
                    data-ai-hint="GoDaddy Pro Logo"
                />
              </div>
          </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Managed GoDaddy Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We provide a 'done-for-you' service for all the essential products in the GoDaddy ecosystem, offering peace of mind and expert management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {godaddyServices.map((service) => (
                <Card key={service.title} className="bg-card text-center hover:shadow-lg transition-shadow flex flex-col">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                            {service.icon}
                        </div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                         <h4 className="font-semibold mb-2 text-sm">Includes:</h4>
                        <ul className="space-y-1 text-xs text-muted-foreground">
                            {service.features.map(feature => (
                                <li key={feature} className="flex items-center justify-center gap-2">
                                    <CheckCircle className="h-3 w-3 text-green-500 shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why SYNC TECH section */}
      <section className="py-20 md:py-28">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-last md:order-first">
                <Image 
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FGDsuutErQWptkPENouXACo-1009-80.png&f=1&nofb=1&ipt=95179e3eb17fb8901f3e5f2588acea813e2cddb62e96d26facf79b95c26f6e6b"
                    alt="GoDaddy Point-of-Sale (POS) system in a retail environment"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                    data-ai-hint="GoDaddy POS system"
                />
            </div>
            <div className="order-first md:order-last">
                <h2 className="text-3xl md:text-4xl font-bold">Why SYNC TECH for Your GoDaddy Needs?</h2>
                <p className="mt-4 text-muted-foreground text-lg">As official GoDaddy Pro members, we provide a layer of expert management on top of GoDaddy's robust infrastructure. We act as your single point of contact, translating technical complexities into business results.</p>
                <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-4">
                        <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Single Point of Contact & Accountability</h3>
                            <p className="text-muted-foreground">No more dealing with support lines. You have a dedicated partner who understands your business and is accountable for keeping your online infrastructure running smoothly.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <BarChart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Strategic Guidance & Proactive Management</h3>
                            <p className="text-muted-foreground">We don't just fix problems; we prevent them. We proactively monitor your sites, manage updates, and provide strategic advice to ensure your technology scales with your growth.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 text-center bg-primary text-primary-foreground">
          <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold">Simplify Your Web Infrastructure Today</h2>
              <p className="mt-4 max-w-2xl mx-auto opacity-90">
                 Let SYNC TECH manage your GoDaddy products so you can get back to what matters. Contact us for a free consultation and infrastructure audit.
              </p>
              <div className="mt-8">
                  <Button asChild size="lg" variant="secondary">
                      <a href="mailto:synctechire@gmail.com?subject=GoDaddy%20Pro%20Service%20Inquiry">
                          Request Your Free Audit <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}
