
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Gamepad2, Layers, Cpu, Palette, Code } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Custom Game Development Studio in Dublin, Ireland | Sync Tech",
  description: "Sync Tech is a leading game development company in Dublin, Ireland offering full-cycle development, co-development, and game design services for mobile, PC, and console.",
  keywords: ["Game development Ireland", "Game development studio Dublin", "Custom game development Dublin", "Game design services Dublin", "Hire game developers Ireland", "Unity development Ireland", "Unreal Engine developers Dublin", "Mobile game development Ireland", "SYNC TECH games"],
};

const coreServices = [
    {
        icon: <Layers className="h-8 w-8 text-primary" />,
        title: "Full-Cycle Game Development",
        description: "From concept and game design to post-launch support, we manage the entire game production pipeline, ensuring a cohesive and polished final product."
    },
    {
        icon: <Cpu className="h-8 w-8 text-primary" />,
        title: "Cross-Platform Technology",
        description: "Specializing in Unity and Unreal Engine, we build high-performing games for mobile (iOS & Android), PC, and consoles from a single codebase."
    },
    {
        icon: <Palette className="h-8 w-8 text-primary" />,
        title: "Game Art & Design",
        description: "Our creative team offers comprehensive game art services, including 2D/3D modeling, character design, and UI/UX to bring your game world to life."
    },
    {
        icon: <Code className="h-8 w-8 text-primary" />,
        title: "Backend & Multiplayer Services",
        description: "We architect and deploy scalable backend services, multiplayer game servers, and AI in games to create robust and engaging online experiences."
    }
];

export default function GameDevelopmentPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary text-center">
        <div className="container">
          <Gamepad2 className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Custom Game Development Services</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            As a leading game development studio in Ireland, Sync Tech turns your creative vision into engaging, high-performance games for mobile, PC, and consoles.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Discuss Your Game Idea <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Sync Tech Section */}
      <section className="py-20 md:py-28">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl md:text-4xl font-bold">Your Full-Cycle Game Development Partner</h2>
                  <p className="mt-4 text-muted-foreground text-lg">Game development is a complex interplay of art, technology, and design. Sync Tech offers full-cycle game development and co-development services, providing the expertise you need at every stage, from initial game prototyping and MVP creation to final game publishing support and QA testing.</p>
                  <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">Collaborative & Transparent Process</h3>
                              <p className="text-muted-foreground">We believe in a partnership approach. Our game project management is transparent, keeping you involved from the initial game design document (GDD) to the final release.</p>
                          </div>
                      </li>
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">Flexible Engagement Models</h3>
                              <p className="text-muted-foreground">Whether you need to hire game developers to augment your team or require a full game development outsourcing partner, we offer models that fit your needs.</p>
                          </div>
                      </li>
                  </ul>
              </div>
              <div className="relative">
                  <Image 
                    src="/game.png" 
                    alt="Game development process with code and graphics in Dublin"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                    data-ai-hint="game development code"
                />
              </div>
          </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Game Development Capabilities</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We provide a complete suite of game development services, covering every aspect from technical programming to creative design.
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

       {/* Technology Section */}
      <section className="py-20 md:py-28">
        <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="relative order-last md:order-first">
                    <Card>
                        <CardHeader>
                            <CardTitle>Mastering Game Technology & Platforms</CardTitle>
                            <CardDescription>Our technical expertise spans the industry’s leading engines and platforms.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span>Expert <strong className="text-foreground">Unity development</strong> and <strong className="text-foreground">Unreal Engine development</strong> using C# and C++.</span></li>
                                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span>Cross-platform development for <strong className="text-foreground">Mobile (iOS & Android)</strong>, <strong className="text-foreground">PC</strong>, and <strong className="text-foreground">Console</strong>.</span></li>
                                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span>Specialized development for <strong className="text-foreground">VR/AR games</strong>, HTML5 games, and blockchain/NFT game integration.</span></li>
                                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span>Robust <strong className="text-foreground">multiplayer game development</strong> with scalable backend game services and dedicated servers.</span></li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold">The Tech That Powers Play</h2>
                    <p className="mt-4 text-muted-foreground">A great game is built on powerful technology. As a top video game development company, we provide deep expertise in game engine customization, game performance optimization, and implementing complex features like AI in games and realistic game physics.</p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 text-center bg-primary text-primary-foreground">
          <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold">Bring Your Game to Life</h2>
              <p className="mt-4 max-w-2xl mx-auto opacity-90">
                 As a trusted local game development partner in Dublin, we combine global industry standards with a deep understanding of the creative process. Let's build the next hit game together.
              </p>
              <div className="mt-8">
                  <Button asChild size="lg" variant="secondary">
                      <Link href="/contact">
                          Get a Free Game Development Quote <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}
