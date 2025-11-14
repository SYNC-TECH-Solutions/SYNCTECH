
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, CreditCard, BarChart3, Settings, ShieldCheck, DollarSign, Briefcase, Globe, Workflow, RefreshCw, FileText, Link2, Database, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/components/logo';

export const metadata: Metadata = {
  title: "Expert Stripe Integration & Development Services in Dublin | SYNC TECH",
  description: "SYNC TECH offers expert Stripe integration services in Dublin and worldwide. We handle everything from Stripe Payments and Billing to Connect, Identity, and Issuing for a seamless financial infrastructure for your Irish business.",
  keywords: ["Stripe integration Ireland", "Stripe developers Dublin", "payment gateway services Dublin", "Stripe Connect Ireland", "Stripe Billing Dublin", "e-commerce payments Ireland", "SaaS payments Dublin", "SYNC TECH Stripe"],
};

const paymentServices = [
    {
        icon: <CreditCard className="h-8 w-8 text-primary" />,
        title: "Stripe Payments",
        description: "Seamlessly accept credit cards, debit cards, and popular payment methods from around the world with a unified API."
    },
    {
        icon: <Link2 className="h-8 w-8 text-primary" />,
        title: "Payment Links",
        description: "Create a full payment page in just a few clicks and share the link with your customers—no coding required."
    },
    {
        icon: <FileText className="h-8 w-8 text-primary" />,
        title: "Invoices",
        description: "Create and send customized invoices, automate payment collection, and easily manage your accounts receivable."
    },
     {
        icon: <RefreshCw className="h-8 w-8 text-primary" />,
        title: "Subscriptions",
        description: "Set up and manage recurring billing and subscriptions for SaaS products, memberships, and service plans."
    }
];

const financialServices = [
     {
        icon: <BarChart3 className="h-8 w-8 text-primary" />,
        title: "Billing & Reporting",
        description: "Automate your revenue operations with flexible billing logic, and get real-time financial reporting and analytics."
    },
    {
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        title: "Tax",
        description: "Automatically calculate and collect sales tax, VAT, and GST with just one line of code to simplify tax compliance."
    },
    {
        icon: <Database className="h-8 w-8 text-primary" />,
        title: "Data Management",
        description: "We help you migrate, manage, and understand your financial data securely within the Stripe ecosystem."
    },
     {
        icon: <DollarSign className="h-8 w-8 text-primary" />,
        title: "Financial Connections",
        description: "Securely link your customers' financial accounts to streamline payments, manage risk, and launch new products."
    }
];

const businessOpsServices = [
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Connect",
        description: "Build a multi-sided marketplace or platform. We integrate Stripe Connect to handle complex payment flows and onboard sellers."
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Identity",
        description: "Securely verify user identities from over 30 countries to reduce fraud and meet compliance requirements."
    },
    {
        icon: <CreditCard className="h-8 w-8 text-primary" />,
        title: "Issuing",
        description: "Create, manage, and distribute virtual and physical cards, giving you full control over your spending."
    },
    {
        icon: <Workflow className="h-8 w-8 text-primary" />,
        title: "Workflows",
        description: "Automate manual processes across your revenue lifecycle, from customer onboarding to dispute management."
    }
];


export default function StripePage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary text-center">
        <div className="container">
            <div className="flex justify-center items-center gap-4 md:gap-6 mb-8">
                <Image src="https://cdn.worldvectorlogo.com/logos/stripe-4.svg" alt="Stripe Logo" width={60} height={60} />
                <span className="text-4xl md:text-5xl font-bold text-muted-foreground">x</span>
                <Logo className="text-4xl md:text-5xl" />
            </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Expert Stripe Integration & Development</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            We build and manage your complete financial infrastructure with Stripe. From accepting payments to managing subscriptions and preventing fraud, SYNC TECH is your expert partner.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a href="mailto:synctechire@gmail.com?subject=Stripe%20Service%20Inquiry">
                Get a Free Stripe Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What is Stripe? Section */}
      <section className="py-20 md:py-28">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl md:text-4xl font-bold">What is <span className="text-primary">Stripe</span>?</h2>
                  <p className="mt-4 text-muted-foreground text-lg">Stripe is a complete, unified platform for internet commerce. It's a suite of payment APIs that powers commerce for online businesses of all sizes, from startups to public companies. Its software and APIs allow businesses to accept payments, send payouts, and manage their business online.</p>
                  <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">Developer-First & Infinitely Scalable</h3>
                              <p className="text-muted-foreground">Stripe is built for developers, providing powerful and easy-to-use APIs. This allows us to create custom, secure, and scalable payment solutions tailored to your exact business needs.</p>
                          </div>
                      </li>
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">A Full Financial Stack</h3>
                              <p className="text-muted-foreground">Beyond just accepting payments, Stripe offers a complete suite of tools to manage revenue, prevent fraud, expand internationally, and launch new business models like marketplaces and subscription services.</p>
                          </div>
                      </li>
                  </ul>
              </div>
              <div className="relative flex justify-center items-center">
                  <Image 
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fb.stripecdn.com%2Fdocs-statics-srv%2Fassets%2Fmobile-app-metrics.8a84e7d07defcdf19b3074011cdfcf59.png&f=1&nofb=1&ipt=d2988839b81036a7a22f211793f43935bb6f499df9c2dec8f9534b7c19b46650"
                    alt="Stripe payment metrics on a mobile app interface in Dublin"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                    data-ai-hint="stripe payment interface"
                />
              </div>
          </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Managed Stripe Integration Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We provide end-to-end services to integrate Stripe's powerful features into your business operations.
            </p>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Payment Acceptance</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {paymentServices.map((service) => (
                    <Card key={service.title} className="bg-card text-center hover:shadow-lg transition-shadow flex flex-col">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">{service.icon}</div>
                            <CardTitle className="text-lg">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                             <p className="text-muted-foreground text-sm">{service.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
          </div>

           <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Revenue & Financial Management</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {financialServices.map((service) => (
                    <Card key={service.title} className="bg-card text-center hover:shadow-lg transition-shadow flex flex-col">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">{service.icon}</div>
                            <CardTitle className="text-lg">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                             <p className="text-muted-foreground text-sm">{service.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
          </div>

           <div>
            <h3 className="text-2xl font-bold text-center mb-8">Business Operations</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {businessOpsServices.map((service) => (
                    <Card key={service.title} className="bg-card text-center hover:shadow-lg transition-shadow flex flex-col">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">{service.icon}</div>
                            <CardTitle className="text-lg">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                             <p className="text-muted-foreground text-sm">{service.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why SYNC TECH section */}
      <section className="py-20 md:py-28">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-last md:order-first flex justify-center items-center p-8 bg-card rounded-lg">
                <div className="flex justify-center items-center gap-4 md:gap-6">
                    <Image src="https://cdn.worldvectorlogo.com/logos/stripe-4.svg" alt="Stripe Logo" width={60} height={60} />
                    <span className="text-4xl md:text-5xl font-bold text-muted-foreground">x</span>
                    <Logo className="text-4xl md:text-5xl" />
                </div>
            </div>
            <div className="order-first md:order-last">
                <h2 className="text-3xl md:text-4xl font-bold">Why SYNC TECH for Stripe?</h2>
                <p className="mt-4 text-muted-foreground text-lg">As official Stripe partners, we provide expert integration and custom development services. We don't just enable payments; we architect a complete financial operating system for your business.</p>
                <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-4">
                        <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Custom Development & Integration</h3>
                            <p className="text-muted-foreground">We go beyond basic setup to build custom logic, integrate Stripe with your existing systems (like CRMs and accounting software), and tailor the experience to your unique business model.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Strategic Guidance & Support</h3>
                            <p className="text-muted-foreground">We provide ongoing support and strategic advice to help you leverage Stripe's full potential, from optimizing for international payments to launching new revenue streams.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 text-center bg-primary text-primary-foreground">
          <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold">Build Your Financial Infrastructure with Experts</h2>
              <p className="mt-4 max-w-2xl mx-auto opacity-90">
                 Let's architect a payment solution that's secure, scalable, and ready for global commerce. Contact SYNC TECH for a free consultation on your Stripe integration needs.
              </p>
              <div className="mt-8">
                  <Button asChild size="lg" variant="secondary">
                      <a href="mailto:synctechire@gmail.com?subject=Stripe%20Service%20Inquiry">
                          Discuss Your Stripe Project <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}
