
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Shield, Zap, Bot, Video, Search, BarChart, Cloud, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/components/logo';

export const metadata: Metadata = {
  title: "Jetpack for WordPress Services | SYNC TECH",
  description: "SYNC TECH offers expert integration and management of Jetpack for WordPress. Enhance your site with top-tier security, performance boosts, AI tools, and real-time backups. Dublin-based, global service.",
  keywords: ["Jetpack for WordPress", "WordPress security", "WordPress performance", "VaultPress backup", "Akismet anti-spam", "Jetpack AI", "VideoPress hosting", "SYNC TECH Jetpack", "managed WordPress Ireland"],
};

const jetpackServices = [
    {
        icon: <Shield className="h-8 w-8 text-primary" />,
        title: "Complete Security Suite",
        description: "Protect your site with real-time VaultPress backups (10GB to 1TB), daily malware scanning (Scan Daily), and Akismet anti-spam to keep your comments and forms clean.",
        features: ["VaultPress Backup", "Daily Malware Scan", "Akismet Anti-spam", "Web Application Firewall (WAF)"]
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Performance & Speed (Boost)",
        description: "Optimize your site's speed with Jetpack Boost. We implement essential tools to improve your Core Web Vitals, giving your visitors a faster, smoother experience.",
        features: ["Image CDN", "Lazy Loading Images", "CSS & JavaScript Optimization"]
    },
    {
        icon: <Bot className="h-8 w-8 text-primary" />,
        title: "AI & Content Creator Tools",
        description: "Leverage the power of Jetpack AI to supercharge your content creation. Craft stunning articles, boost your subscriber base, and monetize your online presence with ease.",
        features: ["AI Assistant for Content", "Advanced Social Sharing", "Monetization Tools"]
    },
    {
        icon: <Video className="h-8 w-8 text-primary" />,
        title: "VideoPress Hosting",
        description: "High-quality, ad-free video hosting built for WordPress. Get 1TB of cloud storage, a customizable player, and fast delivery via a global CDN.",
        features: ["1TB Video Storage", "Ad-Free Player", "4K Resolution Support", "Global CDN"]
    },
    {
        icon: <Search className="h-8 w-8 text-primary" />,
        title: "Jetpack Search",
        description: "Implement a powerful, customizable search experience that helps your visitors instantly find the content they need, improving engagement and time on site.",
        features: ["Real-time Indexing", "Filtering and Sorting", "Customizable Algorithm"]
    },
    {
        icon: <Clock className="h-8 w-8 text-primary" />,
        title: "Advanced Monitoring",
        description: "Upgrade your site's uptime monitoring with 1-minute alert intervals, SMS notifications, and alerts sent to multiple email recipients for peace of mind.",
        features: ["1-Minute Scan Interval", "SMS & Email Notifications", "Downtime Alerts"]
    }
];

export default function JetpackPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary text-center">
        <div className="container">
            <div className="flex justify-center items-center gap-4 md:gap-6 mb-8">
                <Image src="https://cdn.worldvectorlogo.com/logos/jetpack.svg" alt="Jetpack Logo" width={60} height={60} />
                <span className="text-4xl md:text-5xl font-bold text-muted-foreground">x</span>
                <Logo className="text-4xl md:text-5xl" />
            </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Expert Jetpack for WordPress Services</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            We empower your WordPress site with Jetpack's elite suite of tools for security, performance, and growth. SYNC TECH provides expert setup, management, and support.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a href="mailto:synctechire@gmail.com?subject=Jetpack%20Service%20Inquiry">
                Get a Free Jetpack Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What is Jetpack? Section */}
      <section className="py-20 md:py-28">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl md:text-4xl font-bold">What is <span className="text-primary">Jetpack</span>?</h2>
                  <p className="mt-4 text-muted-foreground text-lg">Jetpack is an all-in-one toolkit for WordPress, designed by the same experts behind WordPress.com. It's a comprehensive suite of plugins that brings the power of the WordPress.com cloud to your self-hosted site, providing top-tier security, blazing-fast performance, and powerful growth tools.</p>
                  <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">A Unified Solution for Your Site</h3>
                              <p className="text-muted-foreground">Instead of managing dozens of separate plugins, Jetpack offers a single, reliable solution for backups, security scanning, performance optimization, and content creation, all managed from one dashboard.</p>
                          </div>
                      </li>
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">Built and Backed by WordPress Experts</h3>
                              <p className="text-muted-foreground">Because Jetpack is developed by Automattic (the creators of WordPress), it guarantees seamless compatibility and best-in-class performance for your website.</p>
                          </div>
                      </li>
                  </ul>
              </div>
              <div className="relative">
                  <Image 
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.webhoster.de%2Ffiles%2FWissensdatenbank%2FWordPress%2Fjetpack_logo.jpg&f=1&nofb=1&ipt=d20eb5807498c8cde0c5980e03e45ed44c478a87b640e7912d09724137c8702f"
                    alt="Jetpack for WordPress logo and branding"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                    data-ai-hint="jetpack wordpress logo"
                />
              </div>
          </div>
      </section>

      {/* Core Jetpack Services Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Managed Jetpack Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We configure and manage the full suite of Jetpack products to ensure your WordPress site is secure, fast, and optimized for growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jetpackServices.map((service) => (
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
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.elegantthemes.com%2Fblog%2Fwp-content%2Fuploads%2F2021%2F03%2Fjetpack-plugin-featured-image.png&f=1&nofb=1&ipt=515a0cdd7d29b28b7e28406f52f3607f240bb749d7f00d36746fd8169992c90a"
                    alt="Jetpack dashboard shown on a laptop screen"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                    data-ai-hint="jetpack dashboard interface"
                />
            </div>
            <div className="order-first md:order-last">
                <h2 className="text-3xl md:text-4xl font-bold">Why SYNC TECH for Your Jetpack Needs?</h2>
                <p className="mt-4 text-muted-foreground text-lg">As official Jetpack affiliates, we do more than just install a plugin. We provide a fully managed service, ensuring that every feature is perfectly configured to meet your specific goals.</p>
                <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-4">
                        <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Expert Configuration & Management</h3>
                            <p className="text-muted-foreground">We handle the entire setup and ongoing management, from configuring real-time backups to optimizing your site's performance with Boost, so you can focus on your business.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Affordable, All-in-One Solution</h3>
                            <p className="text-muted-foreground">We provide these enterprise-grade features as part of our affordable managed WordPress services, offering you unparalleled value and peace of mind.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 text-center bg-primary text-primary-foreground">
          <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold">Supercharge Your WordPress Site Today</h2>
              <p className="mt-4 max-w-2xl mx-auto opacity-90">
                 Let's enhance your site's security, speed, and growth potential with Jetpack. Contact SYNC TECH for a free consultation and see how we can help.
              </p>
              <div className="mt-8">
                  <Button asChild size="lg" variant="secondary">
                      <a href="mailto:synctechire@gmail.com?subject=Jetpack%20Service%20Inquiry">
                          Discuss Your Jetpack Needs <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}
