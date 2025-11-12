
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ShoppingCart, Settings, Package, Code } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/components/logo';

export const metadata: Metadata = {
  title: "Expert WooCommerce Development Services | SYNC TECH",
  description: "SYNC TECH offers custom WooCommerce development in Dublin and worldwide. We build and customize high-performance online stores with advanced features like subscriptions, bookings, and dynamic pricing.",
  keywords: ["WooCommerce development Dublin", "custom WooCommerce services", "WooCommerce agency Ireland", "hire WooCommerce developers", "WooCommerce experts", "e-commerce solutions", "SYNC TECH WooCommerce", "Stripe for WooCommerce", "WooCommerce Subscriptions", "WooCommerce Bookings"],
};

const coreFeatures = [
    {
        icon: <ShoppingCart className="h-8 w-8 text-primary" />,
        title: "Sell Anything, Anywhere",
        description: "From physical products and digital downloads to subscriptions and memberships, we build stores that cater to your exact business model."
    },
    {
        icon: <Package className="h-8 w-8 text-primary" />,
        title: "Robust Product Management",
        description: "Easily add products, manage inventory, set pricing, and showcase your items with a powerful and intuitive backend system."
    },
    {
        icon: <CheckCircle className="h-8 w-8 text-primary" />,
        title: "Secure & Diverse Payments",
        description: "We integrate over 100 payment gateways, including Stripe, PayPal, and Klarna, to offer your customers a secure and seamless checkout experience."
    },
    {
        icon: <Settings className="h-8 w-8 text-primary" />,
        title: "Highly Customizable & Extensible",
        description: "The true power of WooCommerce lies in its flexibility. We leverage its vast ecosystem to build custom features that fit your unique needs."
    }
];

const supportedExtensions = [
    "Accommodations Bookings", "Affirm Payments", "AfterPay", "All Products for Woo Subscriptions", "AutomateWoo", "AutomateWoo - Birthday Add-on", "AutomateWoo - Refer a Friend", "Back in Stock Notifications", "Bookings", "Booking Availability", "Box Office", "Brands", "Bulk Stock Management", "Checkout Field Editor", "Composite Products", "Conditional Shipping and Payments", "Constellation", "Coupons Campaign", "Deposits", "Dynamic Pricing", "EU VAT Number", "Flat Rate Box Shipping", "Gift Cards", "Klarna for WooCommerce", "Klaviyo for WooCommerce", "Mollie Payments", "PayPal Payments", "Per Product Shipping", "Product CSV Import Suite", "Product Recommendations", "Product Vendors", "Rental Products", "Returns and Warranty Requests", "Shipment Tracking", "Shipping Multiple Addresses", "Smart Coupons", "Square for WooCommerce", "Stripe for WooCommerce", "Table Rate Shipping", "Variation Swatches and Photos"
];

export default function WoocommercePage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary text-center">
        <div className="container">
            <div className="flex justify-center items-center gap-4 md:gap-6 mb-8">
                <Image src="https://cdn.worldvectorlogo.com/logos/woocommerce.svg" alt="WooCommerce Logo" width={60} height={60} />
                <span className="text-4xl md:text-5xl font-bold text-muted-foreground">x</span>
                <Logo className="text-4xl md:text-5xl" />
            </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Custom WooCommerce Development Services</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            We transform WordPress sites into powerful, feature-rich e-commerce engines. SYNC TECH builds and extends WooCommerce solutions that drive sales and scale with your business.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a href="mailto:synctechire@gmail.com?subject=WooCommerce%20Service%20Inquiry">
                Get a Free WooCommerce Quote <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What is WooCommerce? Section */}
      <section className="py-20 md:py-28">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl md:text-4xl font-bold">What is <span className="text-primary">WooCommerce</span>?</h2>
                  <p className="mt-4 text-muted-foreground text-lg">WooCommerce is a free, open-source e-commerce plugin built specifically for WordPress. It seamlessly transforms any WordPress site into a powerful, fully-functional online store. It's the engine behind millions of successful online businesses, from small boutiques to large enterprises.</p>
                  <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">The Power of a Unified Platform</h3>
                              <p className="text-muted-foreground">Because it's built on WordPress, WooCommerce allows you to combine a world-class content management system with a robust e-commerce engine, all in one place. This synergy is perfect for businesses that rely on content and SEO to drive sales.</p>
                          </div>
                      </li>
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">Limitless Customization</h3>
                              <p className="text-muted-foreground">Its true power lies in its extensibility. With thousands of themes and plugins (extensions), we can tailor every aspect of your store to match your brand and operational needs perfectly.</p>
                          </div>
                      </li>
                  </ul>
              </div>
              <div className="relative">
                  <Image 
                    src="https://picsum.photos/seed/woocommerce/800/600"
                    alt="A professional WooCommerce online store interface"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                    data-ai-hint="ecommerce website interface"
                />
              </div>
          </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core WooCommerce Development Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We leverage the full power of WooCommerce to build online stores that are powerful, scalable, and tailored to your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreFeatures.map((service) => (
                <Card key={service.title} className="bg-card text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                            {service.icon}
                        </div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">{service.description}</p>
                    </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>

       {/* Supported Extensions Section */}
      <section className="py-20 md:py-28">
        <div className="container max-w-5xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Extend Your Store’s Power with Custom Extensions</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">We are experts at integrating and customizing a vast array of WooCommerce extensions to unlock advanced functionality for your store. If you need it, we can build it.</p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>A Selection of Our Supported Extensions</CardTitle>
                    <CardDescription>We have experience with hundreds of extensions. Here are just a few.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="columns-2 md:columns-3 lg:columns-4 gap-x-8 text-sm text-muted-foreground">
                        {supportedExtensions.sort().map(ext => (
                            <li key={ext} className="mb-2 flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                <span>{ext}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* Why SYNC TECH section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-last md:order-first">
                <Image 
                    src="/project/bblogo.png"
                    alt="SYNC TECH developers working on custom code"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                    data-ai-hint="developer coding"
                />
            </div>
            <div className="order-first md:order-last">
                <h2 className="text-3xl md:text-4xl font-bold">Why SYNC TECH for Your WooCommerce Project?</h2>
                <p className="mt-4 text-muted-foreground text-lg">Choosing the right development partner is critical. At SYNC TECH, we combine deep technical expertise with a commitment to your business success, offering world-class solutions at an affordable price.</p>
                <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-4">
                        <Code className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Bespoke Development & Customization</h3>
                            <p className="text-muted-foreground">We don't just install plugins; we build custom solutions. Whether you need a unique feature or a complex integration, our developers can write the code to make it happen.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Quality & Performance as Standard</h3>
                            <p className="text-muted-foreground">We build fast, secure, and reliable stores. Our development process includes performance optimization and security hardening to ensure your store runs smoothly and safely.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 text-center bg-primary text-primary-foreground">
          <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Build a World-Class Online Store?</h2>
              <p className="mt-4 max-w-2xl mx-auto opacity-90">
                 Let's create a WooCommerce solution that is powerful, scalable, and perfectly aligned with your business goals. Contact us for a free, no-obligation consultation.
              </p>
              <div className="mt-8">
                  <Button asChild size="lg" variant="secondary">
                      <a href="mailto:synctechire@gmail.com?subject=WooCommerce%20Service%20Inquiry">
                          Discuss Your E-commerce Project <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}
