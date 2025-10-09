
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Cloud, Gamepad2, ShieldCheck, BarChart, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: "GameHub by SYNC TECH | Game Development & Esports Solutions Dublin",
  description: "Power up your game with SYNC TECH's GameHub. We offer scalable game server hosting, AI for gaming, anti-cheat security, and community platform development for developers in Dublin, Ireland, and worldwide.",
  keywords: [
    "game development Dublin", "game server hosting Ireland", "AI in gaming", "esports solutions Ireland", "game cybersecurity", "anti-cheat development", "Unreal Engine developers", "Unity developers", "game backend services", "SYNC TECH GameHub"
  ],
};

const gameServices = [
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: "Scalable Game Servers & Backend",
    description: "Deploy low-latency, DDoS-protected game servers that scale from 10 to 10 million players. We build robust backends for matchmaking, leaderboards, and player data.",
    tags: ["AWS", "GCP", "Azure", "Kubernetes", "Multiplayer"]
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "AI for Gaming",
    description: "Create dynamic game worlds with AI-driven NPCs, procedural content generation (PCG), and player behavior analytics to enhance engagement and retention.",
    tags: ["Genkit", "TensorFlow", "NPC Behavior", "Analytics"]
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Cybersecurity & Anti-Cheat",
    description: "Protect your game's integrity and your players' accounts. We implement advanced anti-cheat measures, secure authentication, and data encryption.",
    tags: ["Anti-Cheat", "Account Security", "DDoS Mitigation"]
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Web & Community Platforms",
    description: "Build a home for your players. We develop official game websites, forums, wikis, and social hubs to foster a thriving and engaged community.",
    tags: ["Next.js", "Community Hubs", "Player Engagement"]
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Game Analytics & FinOps",
    description: "Understand your players and optimize your costs. We set up powerful analytics dashboards and implement FinOps to manage your cloud spend effectively.",
    tags: ["Data Analytics", "Cost Optimization", "Player Behavior"]
  },
  {
    icon: <Gamepad2 className="h-8 w-8 text-primary" />,
    title: "Esports & Live Ops Solutions",
    description: "Power your competitive scene with reliable tournament infrastructure, live-event management tools, and real-time data integration for broadcasts.",
    tags: ["Esports", "Live Events", "Tournament Platform"]
  }
];

export default function GameHubPage() {
  return (
    <div className="bg-background">
      {/* --- Hero Section --- */}
      <section className="relative w-full h-[calc(80vh)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background">
          <Image 
            src="https://picsum.photos/seed/gamehubhero/1920/1080" 
            alt="Futuristic gaming technology background"
            fill
            className="object-cover opacity-20"
            data-ai-hint="gaming technology background"
            priority
          />
           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>

        <div className="container text-center z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
            GameHub by <span className="text-primary">SYNC TECH</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            From server infrastructure to AI-powered experiences, we provide the end-to-end technology solutions that game developers in Dublin and across the globe need to build, launch, and scale the next generation of games.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Bring Your Game to Life</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#services">Explore Our Game Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* --- The Opportunity Section --- */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge>The Dublin Advantage</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">The Epicenter of Gaming Innovation</h2>
              <p className="text-muted-foreground mb-4">
                Ireland, and specifically Dublin, is a burgeoning hub for game development, home to AAA studios and innovative indie developers alike. However, the technical challenges of modern game creation—scalability, security, and player engagement—are more complex than ever.
              </p>
              <p className="text-muted-foreground">
                SYNC TECH provides the local expertise and global-standard infrastructure to solve these challenges, allowing Dublin's creators to focus on what they do best: making incredible games.
              </p>
            </div>
            <div className="relative">
              <Card className="overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/gamedevs/800/600"
                  alt="Game developers collaborating in a modern studio"
                  width={800}
                  height={600}
                  data-ai-hint="game developers studio"
                  className="w-full h-auto object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Your Complete Development Arsenal</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We offer a full suite of services to support your game's entire lifecycle, from initial backend architecture to post-launch community management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gameServices.map((service) => (
              <Card key={service.title} className="flex flex-col bg-card hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                   <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Level Up Your Game?</h2>
          <p className="mt-4 max-w-2xl mx-auto opacity-90">
            Whether you're an indie developer with a big idea or an established studio looking to scale, our team has the expertise to help. Let's discuss your project and build something amazing together.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

    