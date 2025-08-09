import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "E-COMMERCE MANAGER | LUXE THREADS",
    description: "Launched and managed an online fashion brand on WordPress/WooCommerce with custom HTML/CSS, integrating Stripe and PayPal for seamless checkout. Executed SEO and Google Ads campaigns that increased organic traffic by 50% and lifted conversion rates by 25%.",
    image: "/luxethreads.png",
    imageHint: "fashion website",
    techStack: ["WordPress", "WooCommerce", "Stripe", "PayPal", "SEO", "Google Ads"],
    results: "Estimated a pre-revenue of approximately €18,750 per month from Google Ads based on 15,000 monthly visitors, a 2.5% conversion rate, and a €75 average order value.",
    liveUrl: "#",
  },
  {
    title: "GoExploree – Real Estate Mobile App",
    description: "Developed a cross-platform real estate mobile app for a local student accommodation service, enabling 30+ prospective tenants to browse and schedule viewings.",
    image: "/goexploree.png",
    imageHint: "mobile app interface",
    techStack: ["Ionic", "Angular", "Capacitor", "Firebase", "PostgreSQL", "Google Maps API"],
    results: "Successfully enabled 30+ prospective tenants to browse properties and schedule viewings, streamlining the rental process.",
    liveUrl: "https://github.com/SherazHussain546/GoExploree",
  },
  {
    title: "ATLANTIC HOTEL - Live Project",
    description: "Led the redesign and development of the Atlantic Hotel website, creating a user-friendly interface and a custom booking management system.",
    image: "/atlantichotel.png",
    imageHint: "hotel booking system",
    techStack: ["Booking.com API", "Airbnb API", "OpenTable API", "React"],
    results: "Integrated major booking platforms, resulting in a 67% increase in revenue and improved operational efficiency for hotel staff.",
    liveUrl: "http://www.atlantichotel.ie",
  },
];

export default function PortfolioPage() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Portfolio</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A glimpse into the successful solutions we've delivered for our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden hover:scale-[1.02] transition-transform duration-300 bg-background">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <p className="text-sm font-semibold">Results:</p>
                <p className="text-sm text-muted-foreground">{project.results}</p>
              </CardContent>
              <CardFooter>
                 <Button variant="outline" asChild className="w-full">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
