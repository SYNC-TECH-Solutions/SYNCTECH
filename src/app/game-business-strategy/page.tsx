import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, DollarSign, Gamepad2, Layers, ShieldCheck, Users, BarChart } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip } from 'recharts';

export const metadata: Metadata = {
  title: "Game Monetization & Development Strategy | SYNC TECH",
  description: "Leverage SYNC TECH's expertise to build, scale, and monetize your game. We specialize in developing robust backends, in-game economies, and implementing effective ad-based and premium monetization strategies.",
  keywords: [
    "game monetization", "game development strategy", "in-game economy", "rewarded video ads", "freemium games", "game backend development", "scalable game architecture", "SYNC TECH gaming", "mobile game development"
  ],
};

const monetizationStrategies = [
    {
        icon: <DollarSign className="h-8 w-8 text-primary" />,
        title: "In-Game Economies & Virtual Goods",
        description: "We architect and implement robust in-game economies, from virtual currencies to cosmetic items and power-ups, creating compelling reasons for players to make purchases.",
    },
    {
        icon: <BarChart className="h-8 w-8 text-primary" />,
        title: "Strategic Ad Integration",
        description: "We specialize in seamlessly integrating rewarded video ads and other non-intrusive formats that respect the player experience while maximizing revenue per user.",
    },
    {
        icon: <Layers className="h-8 w-8 text-primary" />,
        title: "Freemium & Premium Models",
        description: "Whether you're offering a free-to-play game with premium features or a one-time purchase, we can build the entitlement and access-control systems required.",
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Community & Social Features",
        description: "We build features like guilds, leaderboards, and social sharing that drive long-term player retention and create organic growth opportunities.",
    }
];

export default function GameBusinessStrategyPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary text-center">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">We Build the Engine for Your Game's Success</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Your vision is to create an amazing game; our mission is to build the scalable, secure, and monetizable technology that powers it. We turn player engagement into sustainable revenue.
          </p>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 md:py-28">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <Gamepad2 className="h-12 w-12 text-primary mb-4 mx-auto md:mx-0" />
                <h2 className="text-3xl md:text-4xl font-bold">How We Help Your Game Business</h2>
                <p className="mt-4 text-muted-foreground">
                   At SYNC TECH, we are not just developers; we are architects of digital ecosystems. For game businesses, our value lies in building the robust backend infrastructure and implementing the monetization strategies that allow you to focus on what you do best: creating incredible games.
                </p>
                 <p className="mt-4 text-muted-foreground">
                   We handle the complex technical challenges of scalability, security, and payment processing, providing you with a solid foundation to grow your player base and your revenue. Our expertise ensures your game's technical infrastructure is as well-crafted as its design.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                 <Card className="p-4 text-center">
                    <CardHeader className="p-2 items-center">
                        <div className="bg-primary/10 p-3 rounded-full mb-2">
                           <Layers className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-base font-semibold">Scalable Backends</CardTitle>
                    </CardHeader>
                </Card>
                 <Card className="p-4 text-center">
                    <CardHeader className="p-2 items-center">
                        <div className="bg-primary/10 p-3 rounded-full mb-2">
                            <DollarSign className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-base font-semibold">Monetization APIs</CardTitle>
                    </CardHeader>
                </Card>
                 <Card className="p-4 text-center">
                    <CardHeader className="p-2 items-center">
                        <div className="bg-primary/10 p-3 rounded-full mb-2">
                            <ShieldCheck className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-base font-semibold">Secure Player Data</CardTitle>
                    </CardHeader>
                </Card>
                 <Card className="p-4 text-center">
                    <CardHeader className="p-2 items-center">
                        <div className="bg-primary/10 p-3 rounded-full mb-2">
                            <Users className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-base font-semibold">Player Engagement</CardTitle>
                    </CardHeader>
                </Card>
            </div>
        </div>
      </section>

      {/* Monetization Plans Section */}
      <section id="monetization" className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Monetization Strategy & Plans</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Our primary strategy is to implement proven, player-friendly monetization models that create sustainable revenue without compromising the core gameplay experience. We believe long-term success comes from a positive player relationship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {monetizationStrategies.map((strategy) => (
              <Card key={strategy.title} className="text-center p-6 bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col items-center">
                  {strategy.icon}
                  <CardTitle className="mt-4 text-lg">{strategy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{strategy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 text-center">
          <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Build a Profitable Game?</h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                  Let's discuss your game, your vision, and how our technical expertise can help you achieve your monetization goals.
              </p>
              <div className="mt-8">
                  <Button asChild size="lg">
                      <Link href="/contact">
                          Discuss Your Game Project <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                  </Button>
              </div>
          </div>
      </section>

    </div>
  );
}
